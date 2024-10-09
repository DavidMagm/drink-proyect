import { useContext } from 'react';
//import { useEffect } from 'react';
import { MoneyPageContext } from '../../Context';
import './index.css';
import { TableRate } from '../TableRate';



function InfoRateTable() {
    const {itemsValue} = useContext(MoneyPageContext)
    
    return(
        <section className="section-info-rate">
            <div className='container-name'> 
                <h2>{itemsValue.completeName}</h2>
                <h3>{itemsValue.nameMoney}</h3>
                <p>{itemsValue.rateMoney}</p>
            </div>
            <div className='container-rate'>
                <TableRate></TableRate>
            </div>
        </section>
    )
}

export {InfoRateTable}