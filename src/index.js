
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import store from '../src/redux/store'
import {Provider} from 'react-redux'
import App from './components/App' 
// import {BrowserRouter , Route , withRouter} from 'react-router-dom'



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));