import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import 'reset-css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import createHashHistory from 'history/createHashHistory'

// const history = createHashHistory();

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
    );
registerServiceWorker();
