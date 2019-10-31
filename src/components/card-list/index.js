import React from 'react';
import '../../style.css';
import Card from '../card';
import './card-list.css';


const CardList = ({list}) => (
    <div className="card-list">
        {
            list.map((item) => (
                <Card
                    title={item.title}
                    cardPicture={item.cardPicture}
                    description={item.description}
                    price={item.price}
                />
            ))
        }
    </div>
);

export default CardList;