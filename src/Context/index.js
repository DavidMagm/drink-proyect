import { createContext, useEffect, useState } from "react";

export const MoneyPageContext = createContext()

export function MoneyPageProvider({children}) {

    const url = 'https://api.frankfurter.app';

    const [items,setItems] = useState([]);
    const [itemsValue, setItemsValue] = useState([]);
    const [rateDay, setRateDay] = useState([]);
    const [rateWeek, setRateWeek] = useState([]);
    const [rateYears, setRateYears] = useState([]);
    const [dateToday, setDateToday] = useState("");
    const [nameAmount, setNameAmount] = useState({})
    const [nameCurrency, setNameCurrency] = useState("");
    const [nameCurrencyResult, setNameCurrencyResult] = useState("");
    const [amountCurency, setAmountCurency] = useState("");
    const [innerValueCurrencyResult, setInnerValueCurrencyResult] = useState(0)
    const [valueSearch, setValueSearch] = useState("");



    useEffect(() => {
        fetch(`${url}/latest`)
            .then(res => res.json())
            .then(data => setItems(data.rates))
    },[])


    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest`)
            .then(res => res.json())
            .then(data => setDateToday(data.date))
    }, [])

    useEffect(() => {
        fetch(`https://api.frankfurter.app/currencies`)
            .then(res => res.json())
            .then(data => setNameAmount(data))
    }, [])

    async function apiAmountCurrency(valueCash,currencyPrincipal,currencyTransform) {
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${valueCash}&from=${currencyPrincipal}&to=${currencyTransform}`)
            const data = await response.json()
            setInnerValueCurrencyResult(data.rates[currencyTransform])
        
    }
    

    

    return(
        <MoneyPageContext.Provider value={{items,itemsValue,setItemsValue,dateToday,rateWeek,setRateWeek, rateYears, setRateYears,rateDay, setRateDay, nameAmount, amountCurency, setAmountCurency, nameCurrencyResult, setNameCurrencyResult, nameCurrency, setNameCurrency,innerValueCurrencyResult,apiAmountCurrency,valueSearch, setValueSearch}}>
            {children}
        </MoneyPageContext.Provider>
    )
}