import React from 'react';
import './ContentHolder.css';

const ContentHolder = props => (
    <div className="ContentHolder">
        <h2>{props.title}</h2>
        <div className="ContentHolder__inner">
            {props.children}
        </div>
    </div>
)

export default ContentHolder;