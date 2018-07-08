import React from 'react';
import './Sidebar.css';
import FontAwesome from 'react-fontawesome';

const Sidebar = props => (
    <div className="Sidebar">
        <button
            className="Sidebar__call__btn"><FontAwesome name='phone'/>
            <a href="tel:+381637717981"> </a>
        </button>
        <button
            onClick={props.toggleSidebar}
            className="Sidebar__menu__btn"><FontAwesome name='bars'/>
        </button>
        <button
            onClick={props.scroppToTopSmooth}
            style={{ opacity: props.scrollTopVisible ? '1' : '0' }}
            className="Sidebar__top__btn"><FontAwesome name='arrow-up'/>
        </button>
    </div>
)

export default Sidebar;