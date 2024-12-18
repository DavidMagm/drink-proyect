import { useContext, useEffect } from 'react';
import { MoneyPageContext } from '../../Context';
import { TableRate } from '../TableRate';
import { NewsFinalSection } from '../NewsFinalSection';
import './index.css';



function InfoRateTable() {

    const {infoMoneyRate,setTopNewsBusiness} = useContext(MoneyPageContext)

    let queryCurrencyName = infoMoneyRate.completeName.toLowerCase()
    let regexQueryCurrency = queryCurrencyName.replace(/\s+/g, '-')

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${regexQueryCurrency}&pageSize=10&apiKey=6e9123d54a31446e82cdd97208d8c7fb`)
        .then(response => response.json())
        .then(data => setTopNewsBusiness(data.articles))
    },[regexQueryCurrency, setTopNewsBusiness])
    
    return(
        <section className="section-info-rate">
            <div className='container-name'> 
                <h2>{infoMoneyRate.completeName}</h2>
                <h3>{infoMoneyRate.nameMoney}</h3>
                <p>{infoMoneyRate.rateMoney}</p>
            </div>
            <div className='container-rate'>
                <TableRate></TableRate>
            </div>
            <NewsFinalSection></NewsFinalSection>
        </section>
    )
}

export {InfoRateTable}