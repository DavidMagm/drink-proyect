/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { useContext, useEffect } from "react"
import { MoneyPageContext } from "../../Context"
function useDataValueDate(url) {

    const {infoMoneyRate, dateToday, rateWeek, setRateWeek, rateYears, setRateYears, rateDay, setRateDay} = useContext(MoneyPageContext)

    // API URLs 
    const weekURL = `${url}/2021-01-01..?to=${infoMoneyRate.nameMoney}`; 
    const dayURL = `${url}/2024-01-02..${dateToday}?to=${infoMoneyRate.nameMoney}`; 
    const yearsURL = `${url}/2014-01-01..?to=${infoMoneyRate.nameMoney}`; 
    
    useEffect(() => { 
        const fetchData = async () => { 
            try { 
                const [weekResponse, dayResponse, yearsResponse] = await Promise.all([ 
                    fetch(weekURL), 
                    fetch(dayURL), 
                    fetch(yearsURL)  
                ]); 
                const [weekData, dayData, yearsData] = await Promise.all([ 
                    weekResponse.json(), 
                    dayResponse.json(), 
                    yearsResponse.json() 
                ]); 
                setRateWeek(weekData.rates); 
                setRateDay(dayData.rates); 
                setRateYears(yearsData.rates); 

            } catch (error) {
                console.error(error); 
            } 
        }; 
        fetchData(); 
    }, [weekURL, dayURL, yearsURL, setRateWeek, setRateDay, setRateYears]);

    const formatData = (data) => { 
        return Object.entries(data).flatMap(([key, value]) =>
            Object.entries(value).map(([_, rate]) => ({ 
                    time: key, value: rate 
            })) 
        ); 
    }; 
    const filterData = (data, regex) => {
        return data 
        .filter(([date]) => regex.test(date)) 
        .flatMap(([date, rates]) => 
            Object.entries(rates).map(([_, rate]) => ({ 
                time: date, value: rate 
            })) 
        ); 
    }; 

    const weekData = formatData(rateWeek); 
    const dayData = formatData(rateDay); 
    const yearData = filterData(Object.entries(rateYears), /\d{4}-01-0[0-7]/); 
    const monthData = filterData(Object.entries(rateWeek), /\d{4}-\d{2}-0[0-7]/); 

    return { dayData, weekData, monthData, yearData }
}

export {useDataValueDate};
