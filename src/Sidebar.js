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
import './Sidebar.css';

function Sidebar() {
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
            <SidebarOption title="Hip Hop" />
            <SidebarOption title="Rock" />
            <SidebarOption title="RnB" />
        </div>
    );
}

export default Sidebar;