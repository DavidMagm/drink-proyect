import { useContext } from 'react';
import { MoneyPageContext } from '../../Context';
import { NavLink } from 'react-router-dom';
import './index.css';


function Nav() {

    const {setValueSearch} = useContext(MoneyPageContext);

    let navText = {
        fontSize: 'medium',
        color: '#000'
    }
    return(
        <nav className="nav-container">
            <ul className='nav-left'>
                <li><NavLink style={navText} to={'/'} className={({isActive}) => isActive ? 'nav-active': 'nav-desactive'}>ConVsenige</NavLink></li>
            </ul>
            <ul>
                <li className='nav-text'><NavLink style={navText} to={"/amount"} className={({isActive}) => isActive ? 'nav-active': 'nav-desactive'}>Currency</NavLink></li>
                <li><input id='nav-search' type="text" placeholder='Search' onChange={(e) => setValueSearch(e.target.value)}/></li>
                <button id='nav-button'>Search</button>
            </ul>
        </nav>
    )
}

export {Nav};