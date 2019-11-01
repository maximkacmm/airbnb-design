import React from 'react';
import '../../style.css';
import './searchBox.css';
import search from './search.svg';


function SearchBox () {
    return (
        <div className="searchBox searchBox-wrapper">
            <img className="searchBox-picture" src={search} alt="search picture"/>
            <input className="searchBox-entryField" type="search" placeholder='Try "Los Angeles"'/>
        </div>
    );
}

export default SearchBox;