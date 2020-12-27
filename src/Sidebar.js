import React from 'react';
/*
    https://material-ui.com/
    npm install @material-ui/icons
    https://material-ui.com/components/material-icons/
*/
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from './DataLayer';
import './Sidebar.css';

function Sidebar({ spotify }) {
    const [{ house_music_playlist, afterglow_search, user_playlists }, dispatch] = useDataLayerValue();

    /*
        Sanity check
    */
    console.log("User Playlists >>> ", user_playlists);
    console.log("Afterglow Search >>> ", afterglow_search);
    console.log("House Music Playlist >>> ", house_music_playlist);

    return (
        <div className="sidebar">
            {/*
                The logo is too big. 
                We usual use the css rule object fit contains to make sure that the aspect ratio stays the same
            */}
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify Logo"/>
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            
            {/*
                Using JSX
                Using optional training to see if the playlists are empty for wahtever reason
                The object that is returned has a property called items
                Check if there are items inside of it and map it to 
                For each single playlist(item) go ahead and return 
                NB: Make Spotify Playlists Public
            */}
            {user_playlists?.items?.map((user_playlist) => {
                return <SidebarOption title={user_playlist.name} />
            })}
            
            {/*
                Search tracks whose name, album or artist contains 'Afterglow' 
            
            {afterglow_search?.tracks?.items?.map((search_result) => {
                return <SidebarOption title={search_result.album.name} />
            })}
            */}

            {/*
                Search playlists whose name or description contains 'House Music' 
            
            {house_music_playlist?.items?.map((house_music_song) => {
                return <SidebarOption title={house_music_song.name} />
            })}
            */}

        </div>
    );
}

export default Sidebar;