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
    //const [compareDate, setCompareDate] = useState([])



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
    },[])

    // PENDIENTE DE REVISAR

    // const currentDate = new Date(); 
    // const previousDate = new Date(); 
    // previousDate.setDate(currentDate.getDate() - 1);

    //     const formatDate = (date) => { 
    //         const year = date.getFullYear(); 
    //         const month = String(date.getMonth() + 1).padStart(2, '0'); 
    //         const day = String(date.getDate()).padStart(2, '0'); 
    //         return `${year}-${month}-${day}`; 
    //     }; 
    //         const currentDateString = formatDate(currentDate); 
    //         const previousDateString = formatDate(previousDate); 
    //         console.log(currentDateString); 
    //         console.log(previousDateString);

    //     useEffect(() => {
    //         setTimeout(() => {
    //             async function comparePreviusDate() {
    //                 try {
    //                     const response = await fetch(`https://api.frankfurter.dev/v1/2024-12-23..204-12-22`)
    //                     const data = await response.json()
    //                     setCompareDate(data)
    //                 } catch (error) {
    //                     console.log(error)
    //                 }
    //             }
    //             comparePreviusDate()
    //             console.log(compareDate)
    //         }, 4000)
    //     }, [])


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