import React from 'react';
import { NavLink } from 'react-router-dom';
import './Toolbar.css';

import navData from './nav-data.json';
import smallLogo from '../assets/marjanovic-logo-small.png';

// const pageTitles = ["Početna", "Proizvodi", "O Nama", "Kontakt"];
// const pagePaths = ["/", "/proizvodi", "/o_nama", "/kontakt"];

const Toolbar = props => (
    <div className="Toolbar">
        <div className="image__container">
            <img 
                style={{ borderRadius: "0" }}
                src={smallLogo} 
                alt=""/>
        </div>
        <div className="nav-links">
            {navData.map(({ text, link }) => (
                <NavLink 
                    activeClassName="toolbar-selected" 
                    exact to={link}
                    key={link}>{text}</NavLink>
            ))}
        </div>
    </div>
);

export default Toolbar;