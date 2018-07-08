import React from 'react';
import { NavLink } from 'react-router-dom';

import navData from '../Toolbar/nav-data.json'

import './Footer.css';

const Footer = props => (
    <div className="Footer">
        <h3 className="foo-title">Zanatska Radionica Marjanović, Subotinac</h3>
        <div className="foo-nav">
            {navData.map(({ text, link }) => (
                <NavLink 
                    onClick={props.moveToTop}
                    activeClassName="foo-nav-selected" 
                    exact to={link}
                    key={link}>{text}</NavLink>
            ))}
        </div>
        <div className="foo-mail">
            <p>Email:</p>
            <a href="mailto:zrmetaloprerada@gmail.com">zrmetaloprerada@gmail.com</a>
        </div>
        <div className="foo-phone">
            <p>Kontakt telefon:</p>
            <p>Fix: +38118/877-649</p>
            <p>Mob: +38163/77-17-981</p>
            <p style={{color: '#8961E7'}}>Viber: +38165/88-77-649</p>
        </div>
    </div>
)

export default Footer