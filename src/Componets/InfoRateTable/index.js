import { useContext } from 'react';
//import { useEffect } from 'react';
import { MoneyPageContext } from '../../Context';
import './index.css';
import { TableRate } from '../TableRate';



function InfoRateTable() {
    const {infoMoneyRate} = useContext(MoneyPageContext)
    
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
        </section>
    )
}

export {InfoRateTable}