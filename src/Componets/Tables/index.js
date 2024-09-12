import { useContext } from "react"
import { MoneyPageContext } from "../../Context";
import './index.css'

function Tables() {

    const {items} = useContext(MoneyPageContext)
    
    
    let arr = Object.entries(items)
    //let array = Object.values(items)
    
     console.log(arr)
    
    return(
        <>
           {
            arr.map((name,index) => (
                    <div key={index} className="table-rate-name">{name[0]}<span className="table-rate-number">{name[1]}</span></div>
                ))
           }
        </>
    )
}

export {Tables};