import React from 'react';
import '../../style.css';
import './card.css';


const Card = ({cardPicture, description, title, price}) => (
    <div className="card">
        <div className="card-picture">
            <img src={cardPicture} className="card-picture" alt="apartment"/>
        </div>
        <div className="card-text">
                <p className="card-text__description">{description}</p>
                <p className="card-text__title">{title}</p>
                <p className="card-text__price">{price}</p>
        </div>
    </div>
);

export default Card;