import React from 'react';
import logo from './logo.svg';
import ellipse from './ellipse.jpg';

import './style.css';

function App() {
    return (
        <div className="App">
            <header className="App-header wrapper">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="NavBar">
                    <a href="#" className="NavBar-linc">Become a host</a>
                    <a href="#" className="NavBar-linc">Trips</a>
                    <a href="#" className="NavBar-linc">Trips</a>
                    <a href="#" className="NavBar-linc linc__ellipse"><img src={ellipse} className="App-logo" alt="users logo"/></a>
                </div>
            </header>
        </div>
    );
}

export default App;
