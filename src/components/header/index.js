import React from 'react';
import '../../style.css';
import './header.css';
import logo from "./logo.svg";
import ellipse from "./ellipse.jpg";


function Header() {
    return (
            <div className="header">
                <header className="header__inner wrapper">
                    <a href="https://airbnb-design-maximkacmm.surge.sh">
                        <img src={logo} className="header__logo" alt="logo"/>
                    </a>
                    <div className="header__navBar">
                        <a href="#" className="header__link">Become a host</a>
                        <a href="#" className="header__link">Trips</a>
                        <a href="#" className="header__link">Messages</a>
                        <a href="#" className="header__link header__link_ellipse">
                            <img src={ellipse} className="header__link_logoUsers" alt="users logo"/>
                        </a>
                    </div>
                </header>
            </div>
    );
}

export default Header;