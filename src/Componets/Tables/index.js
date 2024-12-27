import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { MoneyPageContext } from "../../Context";
import './index.css'

function Tables() {

    const {listRateNameLatest, setInfoMoneyRate, nameCompleteCurrency, valueSearch} = useContext(MoneyPageContext)
    
    const nameRateLatest = Object.entries(listRateNameLatest)

    const currencyTableData = nameRateLatest.map(([shortName, rateMoney]) => 
        ({
        nameMoney: shortName, 
        rateMoney: rateMoney, 
        completeName: nameCompleteCurrency[shortName] || 'undefined'
        })
    )

    let filterRateList = currencyTableData.filter(currency => {
        let nameCurrency = currency.completeName.toLowerCase()
        return nameCurrency.includes(valueSearch.toLowerCase())
    })

    return(
        <>
           {
            filterRateList.map((item,index) => (
                    <div key={index} className="table-rate-name">
                        <NavLink to={'rate'}>
                            <div onClick={() => setInfoMoneyRate(item)} className="table-rate-complete-name">
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