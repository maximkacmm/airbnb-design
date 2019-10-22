import React from 'react';
import './style.css';
import Header from "./Header/Header";
import Footer from "./footer/footer";
import Main from "./main/main";

function App() {
    return (
        <div className="App">
           <Header/>
           <Main/>
           <Footer/>
        </div>
    );
}

export default App;
