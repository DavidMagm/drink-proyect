import { createContext, useEffect, useState } from "react";

export const MoneyPageContext = createContext()

export function MoneyPageProvider({children}) {

    const url = 'https://api.frankfurter.app';

    const [listRateNameLatest,setListRateNameLatest] = useState([]);
    const [infoMoneyRate, setInfoMoneyRate] = useState([]);
    const [rateDay, setRateDay] = useState([]);
    const [rateWeek, setRateWeek] = useState([]);
    const [rateYears, setRateYears] = useState([]);
    const [dateToday, setDateToday] = useState("");
    const [nameCompleteCurrency, setNameCompleteCurrency] = useState({})
    const [nameCurrency, setNameCurrency] = useState("");
    const [nameCurrencyResult, setNameCurrencyResult] = useState("");
    const [amountCurency, setAmountCurency] = useState("");
    const [innerValueCurrencyResult, setInnerValueCurrencyResult] = useState(0)
    const [valueSearch, setValueSearch] = useState("");



    useEffect(() => {
        fetch(`${url}/latest`)
            .then(res => res.json())
            .then(data => setListRateNameLatest(data.rates))
    },[])


    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest`)
            .then(res => res.json())
            .then(data => setDateToday(data.date))
    }, [])

    useEffect(() => {
        fetch(`https://api.frankfurter.app/currencies`)
            .then(res => res.json())
            .then(data => setNameCompleteCurrency(data))
    }, [])

    async function apiConvertAmount(valueCash,currencyPrincipal,currencyTransform) {
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${valueCash}&from=${currencyPrincipal}&to=${currencyTransform}`)
            const data = await response.json()
            setInnerValueCurrencyResult(data.rates[currencyTransform])
        
    }
    

    

    return(
        <MoneyPageContext.Provider value={{listRateNameLatest,infoMoneyRate,setInfoMoneyRate,dateToday,rateWeek,setRateWeek, rateYears, setRateYears,rateDay, setRateDay, nameCompleteCurrency, amountCurency, setAmountCurency, nameCurrencyResult, setNameCurrencyResult, nameCurrency, setNameCurrency,innerValueCurrencyResult,apiConvertAmount,valueSearch, setValueSearch}}>
            {children}
        </MoneyPageContext.Provider>
    )
}