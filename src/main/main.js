import React from 'react';
import '../style.css';
import "./main.css";
import MainHeading from "./main-heading/main-heading";
import SearchBox from "./searchBox/searchBox";
import Section from "./section/section";



function Main() {
    return (
        <div className="main">
            <MainHeading/>
            <SearchBox/>
            <Section/>
            <Section/>
        </div>
    );
}

export default Main;