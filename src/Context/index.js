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
    const [topNewsBusiness, setTopNewsBusiness] = useState([])



    useEffect(() => {
        async function apiRateLastest() {
            try {
                const response = await fetch(`${url}/latest`)
                const data = await response.json()
                setListRateNameLatest(data.rates)
                setDateToday(data.date)    
            } catch (error) {
                console.log(error)
            }
        }
        apiRateLastest()
    }, [])

    useEffect(() => {
        async function apiCurrenciesLastest() {
            try {
                const response = await fetch(`https://api.frankfurter.app/currencies`)
                const data = await response.json()
                setNameCompleteCurrency(data)
            } catch (error) {
                console.log(error)
            }
        }
        apiCurrenciesLastest()
    }, [])

    async function apiConvertAmount(valueCash,currencyPrincipal,currencyTransform) {
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${valueCash}&from=${currencyPrincipal}&to=${currencyTransform}`)
            const data = await response.json()
            setInnerValueCurrencyResult(data.rates[currencyTransform])
        
    }
    

    return(
        <MoneyPageContext.Provider value={{listRateNameLatest,infoMoneyRate,setInfoMoneyRate,dateToday,rateWeek,setRateWeek, rateYears, setRateYears,rateDay, setRateDay, nameCompleteCurrency, amountCurency, setAmountCurency, nameCurrencyResult, setNameCurrencyResult, nameCurrency, setNameCurrency,innerValueCurrencyResult,apiConvertAmount,valueSearch, setValueSearch, topNewsBusiness,setTopNewsBusiness}}>
            {children}
        </MoneyPageContext.Provider>
    )
}