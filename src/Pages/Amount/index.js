import { useContext } from "react";
import { MoneyPageContext } from "../../Context";
import Layout from "../../Componets/Layout";
import "./index.css"


function Amount() {
    const {
        nameCompleteCurrency,
        amountCurency, 
        setAmountCurency,
        nameCurrencyResult,
        setNameCurrencyResult,
        nameCurrency,
        setNameCurrency,
        apiConvertAmount,
        innerValueCurrencyResult
    } = useContext(MoneyPageContext)
    let listNameCompleteCurrency = Object.values(nameCompleteCurrency);
    
    let getShortNameCurrency = Object.fromEntries(
        Object.entries(nameCompleteCurrency).map(([shortName, fullName]) => [fullName, shortName])
    )
    let shortNameCurrency = getShortNameCurrency[nameCurrency]
    let shortNameCurrencyResult = getShortNameCurrency[nameCurrencyResult]

    const handleAmountChange = (e) => setAmountCurency(e.target.value); 
    const handleCurrencyChange = (e) => setNameCurrency(e.target.value); 
    const handleCurrencyResultChange = (e) => setNameCurrencyResult(e.target.value); 
    const handleConvertClick = () => apiConvertAmount(amountCurency,shortNameCurrency,shortNameCurrencyResult);

    return(
        <Layout>
            <section className="section-amount">
                <form className="currency-amount" onSubmit={(e) => e.preventDefault()}>
                    <div className="container-amount">
                        <label htmlFor="input-amount-currency">Badge</label>
                        <input id="input-amount-currency" type="number" onChange={handleAmountChange}/>
                        <select onChange={handleCurrencyChange}>
                            <option value={'select'}>Select Currency</option>
                            {listNameCompleteCurrency.map((name, index) => (
                                <option key={index} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="container-amount">
                        <label htmlFor="input-amount-result">Amount</label>
                        <input id="input-amount-result" type="text" value={innerValueCurrencyResult}/>
                        <select onChange={handleCurrencyResultChange}>
                            <option value={'select'}>Select Currency</option>
                            {listNameCompleteCurrency.map((name, index) => (
                                <option key={index} value={name}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={handleConvertClick}>Currency</button>
                </form>
            </section>
        </Layout>
    )
}

export {Amount};