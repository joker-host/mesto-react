import React from 'react';
import logo from '../images/logo.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="здесь должен быть логотип :)" className="header__logo" />
        </header>
    );
}

export default Header;
