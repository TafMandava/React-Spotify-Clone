import React from 'react';
import './SidebarOption.css';

function SidebarOption({ title, Icon }) {
    return (
        <div className="sidebarOption">
            {/*
                If there is an icon then render the icon that we passed in (which is why we need a capital I for Icon) and the className sidebarOption__icon

            */}
            {Icon && <Icon className="sidebarOption__icon"/>}
            {/*
                If we have an icon, l do not want to have a regular p tag. I want to have a h4 because it is more pronounced and it's more like a border section
                Else print out a p
            */}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}

export default SidebarOption;