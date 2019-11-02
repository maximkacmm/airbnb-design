import React from 'react';
import '../../style.css';
import './searchBox.css';
import search from './search.svg';


function SearchBox () {
    return (
        <div className="searchBox searchBox_wrapper">
            <img className="searchBox__picture" src={search} alt="search picture"/>
            <input className="searchBox__entryField" type="search" placeholder='Try "Los Angeles"'/>
        </div>
    );
}

export default SearchBox;