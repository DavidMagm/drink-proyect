import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { MoneyPageContext } from "../../Context";
import './index.css'

function Tables() {

    const {listRateNameLatest, setInfoMoneyRate, nameCompleteCurrency, valueSearch} = useContext(MoneyPageContext)
    
    let tableMoneyData = []
    let nameRateLatest = Object.entries(listRateNameLatest)

    nameRateLatest.map(rateName => 
        tableMoneyData.push({nameMoney: rateName[0], rateMoney: rateName[1], completeName: nameCompleteCurrency[rateName[0]]})
    )

    let filterRateList = tableMoneyData.filter(currency => {
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