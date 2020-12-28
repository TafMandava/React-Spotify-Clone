import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

function Header({ spotify }) {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                {/*
                    An input field is going to have a placeholder
                    Search for songs in the postcast
                */}
                <input
                    placeholder="Search for Artists, Songs, on Spotify"
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar src="" alt="Avatar"/>
                <h4>Tafadzwa Mandava</h4>
            </div>            
        </div>
    );
}

export default Header;