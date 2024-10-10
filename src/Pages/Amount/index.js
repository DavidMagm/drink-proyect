import { useContext } from "react";
import { MoneyPageContext } from "../../Context";
import Layout from "../../Componets/Layout";
import "./index.css"


function Amount() {
    const {nameCompleteCurrency,amountCurency, setAmountCurency,nameCurrencyResult, setNameCurrencyResult,nameCurrency, setNameCurrency, apiConvertAmount, innerValueCurrencyResult} = useContext(MoneyPageContext)
    let listNameCompleteCurrency = Object.values(nameCompleteCurrency);
    let shortAndCompleteNameCurrency = Object.entries(nameCompleteCurrency);
    const swapValueNameCurrency = []

    shortAndCompleteNameCurrency.forEach(valueArr => {
       swapValueNameCurrency.push([valueArr[1], valueArr[0]])
    })
    
    let getShortNameCurrency = Object.fromEntries(swapValueNameCurrency)
    let shortNameCurrency = getShortNameCurrency[nameCurrency]
    let shortNameCurrencyResult = getShortNameCurrency[nameCurrencyResult]


    return(
        <Layout>
            <section className="section-amount">
                <form className="currency-amount" onSubmit={(e) => e.preventDefault()}>
                    <div className="container-amount">
                        <label htmlFor="input-amount-currency">Badge</label>
                        <input id="input-amount-currency" type="number" onChange={(e) => setAmountCurency(e.target.value)}/>
                        <select onChange={(e) => setNameCurrency(e.target.value)}>
                            {listNameCompleteCurrency.map((name, index) => (
                                <option key={index} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="container-amount">
                        <label htmlFor="input-amount-result">Amount</label>
                        <input id="input-amount-result" type="text" value={innerValueCurrencyResult}/>
                        <select onChange={(e) => setNameCurrencyResult(e.target.value)}>
                            {listNameCompleteCurrency.map((name, index) => (
                                <option key={index} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={() => apiConvertAmount(amountCurency,shortNameCurrency,shortNameCurrencyResult)}>Currency</button>
                </form>
            </section>
        </Layout>
    )
}

export {Amount};