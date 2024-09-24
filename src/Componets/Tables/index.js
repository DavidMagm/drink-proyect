import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { MoneyPageContext } from "../../Context";
import './index.css'

function Tables() {

    const {items} = useContext(MoneyPageContext)
    
    
    let nameAndRate = Object.entries(items)
    //let array = Object.values(items)
    
     console.log(nameAndRate)
    
    return(
        <>
           {
            nameAndRate.map((name,index) => (
                    <div key={index} className="table-rate-name">
                        <NavLink to={'rate'}>{name[0]}</NavLink>
                        <NavLink to={'rate'}><span className="table-rate-number">{name[1]}</span></NavLink>
                    </div>
                ))
           }
        </>
    )
}

export {Tables};