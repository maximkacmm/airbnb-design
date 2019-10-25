import React from 'react';
import './card.css';

function Card (props) {
    return (
            <div className="card">
                <div className="card__picture">
                    <img src={props.cardPicture} className="card__picture" alt="apartment"/>
                </div>
                <div className="card__text">
                    <ul>
                        <li className="card__text-item item-description">{props.description}</li>
                        <li className="card__text-item item-title">{props.title}</li>
                        <li className="card__text-item item-price">{props.price}</li>
                    </ul>
                </div>
            </div>
    );
}

export default Card;