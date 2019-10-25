import React from 'react';
import Card from "./card/card";
import "./section.css";
import quiet from "./quiet.png";
import romantic from "./romantic.png";
import beautiful from "./beautiful.png";

function Section () {
    return (
        <div className="section wrapper-inner">
            <h2 className="main__SubHeader">
                Homes
            </h2>
            <Card cardPicture={quiet} description="Entire apartment" title="Quiet apartment" price="80$ per night" />
            <Card cardPicture={romantic} description="Entire apartment" title="Romantic cabin with view" price="80$ per night" />
            <Card cardPicture={beautiful} description="Private room" title="Beautiful cozy room" price="80$ per night" />
        </div>
    );
}

export default Section;