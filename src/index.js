import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore , applyMiddleware, compose} from 'redux';
//import rootReducer from './Store/rootReducer'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
