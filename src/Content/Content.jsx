import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ReactCSSTransitionReplace from 'react-css-transition-replace';

import Pocetna from './Pocetna/Pocetna';
import Proizvodi from './Proizvodi/Proizvodi';
import Onama from './Onama/Onama';
import Kontakt from './Kontakt/Kontakt';

import './Content.css';

const Content = props => (
    <div className="Content">
        <Route render={({ location }) => (
            <ReactCSSTransitionReplace
                transitionName="fade-wait"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                <div key={location.pathname}>
                    <Switch location={location}>
                        <Route exact path="/" render={() => <Pocetna moveToTop={props.moveToTop}/>} />
                        <Route path="/proizvodi" component={Proizvodi} />
                        <Route path="/o_nama" component={Onama} />
                        <Route path="/kontakt" component={Kontakt} />
                    </Switch>
                </div>
            </ReactCSSTransitionReplace>
        )} />
    </div>
)

export default Content;