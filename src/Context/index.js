import { createContext, useEffect, useState } from "react";

export const MoneyPageContext = createContext()

export function MoneyPageProvider({children}) {

    const url = 'https://api.frankfurter.app';

    const [items,setItems] = useState([])

    useEffect(() => {
        fetch(`${url}/latest`)
            .then(res => res.json())
            .then(data => setItems(data))
    },[])

    console.log(items)

    return(
        <MoneyPageContext.Provider value={{items}}>
            {children}
        </MoneyPageContext.Provider>
    )
}