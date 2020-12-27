import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import './Player.css';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar spotify={spotify} />           
                <Body />
            </div>

            <Footer /> 
        </div>
    );
}

export default Player;