import React from 'react';
import '../../style.css';
import "./section.css";
import CardList from '../card-list';
import quiet from "./quiet.png";
import romantic from "./romantic.png";
import beautiful from "./beautiful.png";
import thai from "./thai .png";
import retro from "./retro.png";
import hike from "./hike.png";


const list = [
    {
        cardPicture: quiet,
        description: "Entire apartment",
        title: "Quiet apartment",
        price: "80$ per night"
    },
    {
        cardPicture: romantic,
        description: "Entire apartment",
        title: "Romantic cabin with view",
        price: "80$ per night"
    },
    {
        cardPicture: beautiful,
        description: "Private room",
        title: "Beautiful cozy room",
        price: "80$ per night"
    }
];


const list2 =[
    {
        cardPicture: thai,
        description: "Cooking class",
        title: "Authentic Thai Lesson",
        price: "80$ per person"
    },
    {
        cardPicture: retro,
        description: "Photography",
        title: "Retro Photoshoot in NYC",
        price: "50$ per person"
    },
    {
        cardPicture: hike,
        description: "Hiking",
        title: "Sunset Hike",
        price: "30$ per person"
    }
];

const Section = () => (
    <div className="section wrapper-inner">
        <h2 className="main__SubHeader">
            Homes
        </h2>
        <CardList list={list}/>
        <h2 className="main__SubHeader">
            Experiences
        </h2>
        <CardList list={list2}/>
    </div>
);


export default Section;