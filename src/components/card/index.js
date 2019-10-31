import React from 'react';
import '../../style.css';
import './card.css';


const Card = ({cardPicture, description, title, price}) => (
    <div className="card">
        <div className="card__picture">
            <img src={cardPicture} className="card__picture" alt="apartment"/>
        </div>
        <div className="card__text">
            <ul>
                <li className="card__text-item item-description">{description}</li>
                <li className="card__text-item item-title">{title}</li>
                <li className="card__text-item item-price">{price}</li>
            </ul>
        </div>
    </div>
);

export default Card;