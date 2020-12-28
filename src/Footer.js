import React from 'react';
import './Footer.css';

import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';

import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                {/* Album and song details */}
                <img
                    className="footer__albumLogo"
                    src="https://upload.wikimedia.org/wikipedia/en/7/71/Ed_Sheeran_-_Afterglow.png" 
                    alt="Afterglow" 
                />
                <div className="footer__songInfo">
                    <h4>Afterglow</h4>
                    <p>Ed Sheeran</p>
                </div>
            </div>

            <div className="footer__center">
                {/* Player controls */}
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>            

            <div className="footer__right">
                {/* Volume controls */}
                {/* Material UI has a Grid for a certain number of different layouts */}
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>                  
                </Grid>
            </div>  

        </div>
    );
}

export default Footer;