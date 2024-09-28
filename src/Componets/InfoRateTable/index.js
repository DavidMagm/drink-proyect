import { useContext } from 'react';
//import { useEffect } from 'react';
import { MoneyPageContext } from '../../Context';
import './index.css';
import { TableRate } from '../TableRate';



function InfoRateTable() {
    const {itemsValue} = useContext(MoneyPageContext)
    
    return(
        <section className="section-info-rate">
            <div>
                <h2>{itemsValue[0]}</h2>
                <p>{itemsValue[1]}</p>
            </div>
            <div>
                <TableRate></TableRate>
            </div>
        </section>
    )
}

export {InfoRateTable}