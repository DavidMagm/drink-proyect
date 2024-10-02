import { useContext } from "react";
import { MoneyPageContext } from "../../Context";
import Layout from "../../Componets/Layout";
import "./index.css"


function Amount() {
    const {nameAmount,amountCurency, setAmountCurency,nameCurrencyResult, setNameCurrencyResult,nameCurrency, setNameCurrency, apiAmountCurrency, innerValueCurrencyResult} = useContext(MoneyPageContext)
    let arrvalueName = Object.values(nameAmount);
    let arrAliasAndName = Object.entries(nameAmount);
    const arrEntriesCompleName = []

    arrAliasAndName.forEach(valueArr => {
       arrEntriesCompleName.push([valueArr[1], valueArr[0]])
    })
    
    let objCompleteName = Object.fromEntries(arrEntriesCompleName)
    let varibleNameCurrency = objCompleteName[nameCurrency]
    let variableNameCurrencyResult = objCompleteName[nameCurrencyResult]


    return(
        <Layout>
            <section className="section-amount">
                <form className="currency-amount" onSubmit={(e) => e.preventDefault()}>
                    <div className="container-amount">
                        <label htmlFor="input-amount-currency">Badge</label>
                        <input id="input-amount-currency" type="number" onChange={(e) => setAmountCurency(e.target.value)}/>
                        <select onChange={(e) => setNameCurrency(e.target.value)}>
                            {arrvalueName.map((name, index) => (
                                <option key={index} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="container-amount">
                        <label htmlFor="input-amount-result">Amount</label>
                        <input id="input-amount-result" type="text" value={innerValueCurrencyResult}/>
                        <select onChange={(e) => setNameCurrencyResult(e.target.value)}>
                            {arrvalueName.map((name, index) => (
                                <option key={index} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={() => apiAmountCurrency(amountCurency,varibleNameCurrency,variableNameCurrencyResult)}>Currency</button>
                </form>
            </section>
        </Layout>
    )
}

export {Amount};