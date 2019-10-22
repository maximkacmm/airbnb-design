import React from 'react';
import './searchBox.css';

function SearchBox () {
    return (
        <div className="searchBox wrapper-inner">
            <input className="searchBox-inner" type="search" placeholder="&#128269; Try Los Angeles"/>
        </div>
    );
}

export default SearchBox;