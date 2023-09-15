// Header.js
import React from 'react';
import { siteColors } from '../styles/styles'

function Header() {
    return (
        <div className="Header">
            <p style={{color: siteColors.green, font: '10px'}}>Hi, my name is</p>
            <h1>Christopher Bare</h1>
            <p>Senior Software Engineer</p>
        </div>
        );
}

export default Header;
