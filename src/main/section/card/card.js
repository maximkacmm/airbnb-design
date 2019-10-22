import React from 'react';
import quietImage from './quietImage.png';
import './card.css';

function Card () {
    return (
            <div className="card wrapper-card">
                <div className="picture__card">
                    <img src={quietImage} className="picture__card" alt="apartment"/>
                </div>
                <div className="text__card">
                    <ul>
                        <li className="card__list card__list--description">Entire apartment</li>
                        <li className="card__list card__list--title">Quiet apartment</li>
                        <li className="card__list card__list--price">80$ per night</li>
                    </ul>
                </div>
            </div>
    );
}

export default Card;