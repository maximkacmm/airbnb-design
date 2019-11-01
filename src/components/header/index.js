import React from 'react';
import '../../style.css';
import './header.css';
import logo from "./logo.svg";
import ellipse from "./ellipse.jpg";


function Header() {
    return (
            <div className="header">
                <header className="header-inner wrapper">
                    <a href="https://airbnb-design-maximkacmm.surge.sh">
                        <img src={logo} className="header-inner__logo" alt="logo"/>
                    </a>
                    <div className="header-inner__navBar">
                        <a href="#" className="header-inner__link">Become a host</a>
                        <a href="#" className="header-inner__link">Trips</a>
                        <a href="#" className="header-inner__link">Messages</a>
                        <a href="#" className="header-inner__link header-inner__link__ellipse">
                            <img src={ellipse} className="header-inner__link__logoUsers" alt="users logo"/>
                        </a>
                    </div>
                </header>
            </div>
    );
}

export default Header;