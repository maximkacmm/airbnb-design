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
        description: "ENTIRE APARTMENT",
        title: "Quiet apartment",
        price: "80$ per night"
    },
    {
        cardPicture: romantic,
        description: "ENTIRE APARTMENT",
        title: "Romantic cabin with view",
        price: "80$ per night"
    },
    {
        cardPicture: beautiful,
        description: "PRIVATE ROOM",
        title: "Beautiful cozy room",
        price: "80$ per night"
    }
];


const list2 =[
    {
        cardPicture: thai,
        description: "COOKING CLASS",
        title: "Authentic Thai Lesson",
        price: "80$ per person"
    },
    {
        cardPicture: retro,
        description: "PHOTOGRAPHY",
        title: "Retro Photoshoot in NYC",
        price: "50$ per person"
    },
    {
        cardPicture: hike,
        description: "HIKING",
        title: "Sunset Hike",
        price: "30$ per person"
    }
];

const Section = () => (
    <div className="section section_wrapper">
        <h2 className="section__subHeader">
            Homes
        </h2>
        <CardList list={list}/>
        <h2 className="section__subHeader">
            Experiences
        </h2>
        <CardList list={list2}/>
    </div>
);


export default Section;