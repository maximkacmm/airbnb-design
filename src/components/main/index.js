import React from 'react';
import '../../style.css';
import "./main.css";
import MainHeading from "../mainHeading";
import SearchBox from "../searchBox";
import Section from "../../components/section";



function Main() {
    return (
        <div className="main">
            <MainHeading/>
            <SearchBox/>
            <Section/>
        </div>
    );
}

export default Main;