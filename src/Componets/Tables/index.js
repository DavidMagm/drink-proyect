import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { MoneyPageContext } from "../../Context";
import './index.css'

function Tables() {

    const {items, setItemsValue, nameAmount, valueSearch} = useContext(MoneyPageContext)
    
    let tableMoneyData = []
    let nameAndRate = Object.entries(items)
    console.log(valueSearch)
    nameAndRate.map(rateName => 
        tableMoneyData.push({nameMoney: rateName[0], rateMoney: rateName[1], completeName: nameAmount[rateName[0]]})
    )
    
    return(
        <>
           {
            tableMoneyData.map((item,index) => (
                    <div key={index} className="table-rate-name">
                        <NavLink to={'rate'}>
                            <div onClick={() => setItemsValue(item)} className="table-rate-complete-name">
                                {item.nameMoney}
                                <span>{item.completeName}</span>
                            </div>
                        </NavLink>
                        <span className="table-rate-number">{item.rateMoney}</span>
                    </div>
                ))
           }
        </>
    )
}

export {Tables};