import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <header>
            <nav className='navigation'>
            <img src={logo} alt="" />

            <div className='nav-menu'>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
            </nav>
        </header>
    );
};

export default Header;