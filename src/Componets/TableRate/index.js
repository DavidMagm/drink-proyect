//import { useContext } from "react";
import { useEffect } from "react";
//import { MoneyPageContext } from "../../Context";
import { createChart } from "lightweight-charts";
import { useDataValueDate } from "./useDataValueDate";
import './index.css'




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
            with: 100,
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

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');
        const intervals = ['1D', '1W', '1M', '1Y'];
        intervals.forEach(interval => {
            const button = document.createElement('button');
            button.innerText = interval;
            button.addEventListener('click', () => setChartInterval(interval));
            buttonsContainer.appendChild(button);
        });

        container.appendChild(buttonsContainer);

        return () => {chart.remove()}
    },[])
    
    
    return(
    <>
        <div id="container"></div>
    </>
    )
}

export {TableRate};