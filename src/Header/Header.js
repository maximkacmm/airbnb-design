import React from 'react';
import '../style.css';
import './header.css';
import logo from "./logo.svg";
import ellipse from "./ellipse.jpg";


function Header() {
    return (
            <div className="Header__line">
                <header className="Header wrapper">
                    <a href="https://airbnb-design-maximkacmm.surge.sh">
                        <img src={logo} className="Header__logo" alt="logo"/>
                    </a>
                    <div className="Header__nav-bar">
                        <a href="#" className="Header__link">Become a host</a>
                        <a href="#" className="Header__link">Trips</a>
                        <a href="#" className="Header__link">Trips</a>
                        <a href="#" className="Header__link Header__link_ellipse">
                            <img src={ellipse} className="Header__logo" alt="users logo"/>
                        </a>
                    </div>
                </header>
            </div>
    );
}

export default Header;