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
    

    

    return(
        <MoneyPageContext.Provider value={{items,itemsValue,setItemsValue,dateToday,rateWeek,setRateWeek, rateYears, setRateYears,rateDay, setRateDay}}>
            {children}
        </MoneyPageContext.Provider>
    )
}