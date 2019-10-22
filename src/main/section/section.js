import React from 'react';
import Card from "./card/card";
import "./section.css";

function Section () {
    return (
        <div className="section wrapper-inner">
            <h2 className="main__SubHeader">
                Homes
            </h2>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

export default Section;