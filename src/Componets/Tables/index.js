import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { MoneyPageContext } from "../../Context";
import './index.css'

function Tables() {

    const {items, setItemsValue, nameAmount} = useContext(MoneyPageContext)
    
    
    let nameAndRate = Object.entries(items)
    
    
    //let array = Object.values(items)
    
    
    return(
        <>
           {
            nameAndRate.map((name,index) => (
                    <div key={index} className="table-rate-name">
                        <NavLink to={'rate'}>
                            <div onClick={() => setItemsValue(name)} className="table-rate-complete-name">
                                {name[0]}
                                <span>{nameAmount[name[0]]}</span>
                            </div>
                        </NavLink>
                        <span className="table-rate-number">{name[1]}</span>
                    </div>
                ))
           }
        </>
    )
}

export {Tables};