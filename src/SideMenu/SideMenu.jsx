import React from 'react';
import { NavLink } from 'react-router-dom';
import navData from '../Toolbar/nav-data.json';
import FontAwesome from 'react-fontawesome';

import './SideMenu.css';

const SideMenu = props => (
    <div
        className="SideMenu"
        style={{
            top: props.sideMenuVisible ? '0' : '-20vw',
            opacity: props.sideMenuVisible ? '1' : '0',
            visibility: props.sideMenuVisible ? 'visible' : 'hidden',
            transitionDelay: props.sideMenuVisible ? '0ms' : '400ms'
        }}>
        <div className="SideMenu__layer">
            {navData.map(({ text, link }) => (
                <NavLink
                    onClick={props.sidebarLinkAction}
                    className="SideMenu__link SideMenu__link--center"
                    activeClassName="SideMenu__link--selected"
                    exact to={link}
                    key={link}><span>{text}</span></NavLink>
            ))}
            <a
                className="SideMenu__link SideMenu__call SideMenu__link--center"
                href="tel:+381637717981">
                <span>POZOVITE NAS <FontAwesome name="phone"/></span>
            </a>
        </div>
    </div>
)

export default SideMenu;