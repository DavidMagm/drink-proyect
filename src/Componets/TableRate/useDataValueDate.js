/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { useContext, useEffect } from "react"
import { MoneyPageContext } from "../../Context"
function useDataValueDate(url) {

    const {infoMoneyRate, dateToday, rateWeek, setRateWeek, rateYears, setRateYears, rateDay, setRateDay} = useContext(MoneyPageContext)

    // VALUES WEEKS
    useEffect(() => {
            async function apiRateWeek() {
                try {
                    const response = await fetch(`${url}/2021-01-01..?to=${infoMoneyRate.nameMoney}`)
                    const data = await response.json()
                    setRateWeek(data.rates)
                } catch (error) {
                    console.log(error)
                }
            }
            apiRateWeek()
            // fetch(`${url}/2021-01-01..?to=${infoMoneyRate.nameMoney}`)
            //     .then(res => res.json())
            //     .then(data => setRateWeek(data.rates))
    }, [infoMoneyRate.nameMoney])

    const weekData = []

    for(let [key, value] of Object.entries(rateWeek)) {
        for(let [_,valueRateCurrency] of Object.entries(value)) {
            weekData.push({time: key, value: valueRateCurrency})
        }
    }
    
    //VALUES DAYS

    useEffect(() => {
            async function apiRateDay() {
                try {
                    const response = await fetch(`${url}/2024-01-02..${dateToday}?to=${infoMoneyRate.nameMoney}`)
                    const data = await response.json()
                    setRateDay(data.rates)
                } catch (error) {
                    console.log(error)
                }
            }
            apiRateDay()
            // fetch(`${url}/2024-01-02..${dateToday}?to=${infoMoneyRate.nameMoney}`)
            //     .then(res => res.json())
            //     .then(data => setRateDay(data.rates))

    }, [infoMoneyRate.nameMoney])


    const dayData = []

    for(let [key, value] of Object.entries(rateDay)) {
        for(let [_, valueRateCurrency] of Object.entries(value)) {
            dayData.push({time: key, value: valueRateCurrency})
        }
    }

    //VALUES YEARS
    useEffect(() => {
            async function apiRateYears() {
                try {
                    const response = await fetch(`${url}/2014-01-01..?to=${infoMoneyRate.nameMoney}`)
                    const data = await response.json()
                    setRateYears(data.rates)
                } catch (error) {
                    console.log(error)
                }
            }
            apiRateYears()
            // fetch(`${url}/2014-01-01..?to=${infoMoneyRate.nameMoney}`)
            //     .then(res => res.json())
            //     .then(data => setRateYears(data.rates))
    }, [infoMoneyRate.nameMoney])

    let dateWeeksRate = Object.entries(rateYears)

    const yearData = []

    let filterDateForYears = dateWeeksRate.filter(valueDate => {
        let res = valueDate[0].match(/\d\d\d\d-01-0[0-7]/g)
        return res
    })
    filterDateForYears.forEach(valueDate => {
        for(let [_, valueRateCurrency] of Object.entries(valueDate[1])) {
            yearData.push({time: valueDate[0], value: valueRateCurrency})
        }
    })

    //VALUES MONTHS
    let valueDateWeeksRate = Object.entries(rateWeek)

    let filterDateForMonths = valueDateWeeksRate.filter(valueDate => {
        let res = valueDate[0].match(/\d\d\d\d-\d[0-9]-0[0-7]/g)
        return res
    })

    const monthData = []

    filterDateForMonths.map(valueDate => {
        // eslint-disable-next-line no-unused-vars
        for(let [_, valueRateCurrency] of Object.entries(valueDate[1])) {
            monthData.push({time: valueDate[0], value: valueRateCurrency})
        }
    })
    //console.log(filterMonth)

    return {dayData,weekData,monthData,yearData}
}

export {useDataValueDate};
