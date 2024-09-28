import { useContext } from "react";
import { useEffect } from "react";
import { MoneyPageContext } from "../../Context";
import { createChart } from "lightweight-charts";



function useDataValueDate(url) {

    const {itemsValue, dateToday, rateWeek, setRateWeek, rateYears, setRateYears, rateDay, setRateDay} = useContext(MoneyPageContext)

    // VALORES DE LA SEMANA
    useEffect(() => {
        fetch(`${url}/2021-01-01..?to=${itemsValue[0]}`)
            .then(res => res.json())
            .then(data => setRateWeek(data.rates))
    }, [])

    const weekData = []

    for(let [key, value] of Object.entries(rateWeek)) {
        for(let [_,valueItem] of Object.entries(value)) {
            weekData.push({time: key, value: valueItem})
        }
    }
    
    //VALURES DEL DIA

    useEffect(() => {
        fetch(`${url}/2024-01-02..${dateToday}?to=${itemsValue[0]}`)
            .then(res => res.json())
            .then(data => setRateDay(data.rates))
    }, [])


    const dayData = []

    for(let [key, value] of Object.entries(rateDay)) {
        for(let [_, valueItem] of Object.entries(value)) {
            dayData.push({time: key, value: valueItem})
        }
    }

    console.log(dayData)


    //VALORES DEL AÑO
    useEffect(() => {
        fetch(`${url}/2014-01-01..?to=${itemsValue[0]}`)
            .then(res => res.json())
            .then(data => setRateYears(data.rates))
    }, [])

    let arrayValueYear = Object.entries(rateYears)

    const yearData = []

    let filterYear = arrayValueYear.filter(uno => {
        let res = uno[0].match(/\d\d\d\d-01-0[0-7]/g)
        return res
    })
    filterYear.map(uno => {
        for(let [_, valueItem] of Object.entries(uno[1])) {
            yearData.push({time: uno[0], value: valueItem})
        }
    })

    //VALORES DEL MES
    let arrayValueMonth = Object.entries(rateWeek)

    let filterMonth = arrayValueMonth.filter(uno => {
        let res = uno[0].match(/\d\d\d\d-\d[0-9]-0[0-7]/g)
        return res
    })

    const monthData = []

    filterMonth.map(uno => {
        for(let [_, valueItem] of Object.entries(uno[1])) {
            monthData.push({time: uno[0], value: valueItem})
        }
    })
    //console.log(filterMonth)

    return {dayData,weekData,monthData,yearData}
}

//https://api.frankfurter.app

function TableRate() {

    const {dayData,weekData,monthData,yearData} = useDataValueDate('https://api.frankfurter.app')

   

    
    useEffect(() => {

        const seriesesData = new Map([
            ['1D', dayData],
            ['1W', weekData],
            ['1M', monthData],
            ['1Y', yearData],
        ]);




        const chartOptions = {
            layout: {
                textColor: 'black',
                background: { type: 'solid', color: 'white' },
            },
            height: 200,
        };
        
        const container = document.getElementById('container');
        const chart = createChart(container, chartOptions);
    
        const intervalColors = {
            '1D': '#2962FF',
            '1W': 'rgb(225, 87, 90)',
            '1M': 'rgb(242, 142, 44)',
            '1Y': 'rgb(164, 89, 209)',
        };
        
        const lineSeries = chart.addLineSeries({ color: intervalColors['1D'] });
        
        const setChartInterval = (interval) => {
            lineSeries.setData(seriesesData.get(interval));
            lineSeries.applyOptions({
                color: intervalColors[interval],
            });
            chart.timeScale().fitContent();
        }
        
        setChartInterval('1D');

        return () => {chart.remove()}
    },[])
    
    
    return(
        <div id="container"></div>
    )
}

export {TableRate};