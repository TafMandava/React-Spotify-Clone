import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Header({ spotify }) {
    const [{ user }, dipatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                {/* 
                <SearchIcon />
                {/
                    An input field is going to have a placeholder
                    Search for songs in the postcast
                /}
                <input
                    placeholder="Search for Artists, Songs, on Spotify"
                    type="text"
                />
                */}
                <ArrowBackIosIcon />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>            
        </div>
    );
}

export default Header;