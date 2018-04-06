import fetch from 'isomorphic-fetch';

// Note: this is the entry point for the entire application

// step 1: you will need to load the pizza data. it is available at /pizza.json. what-wg fetch is pre-installed.
// remember that fetch uses promises.

// step 2: implement the view and required behaviors

import React from 'react';
import ReactDOM from 'react-dom';
import data from './pizza.json';
import App from './App';
import Loading from './Loading';
ReactDOM.render(<App />, document.getElementById('app'));


