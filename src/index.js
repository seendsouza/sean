import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import './stylesheets/index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App.js'

ReactDOM.render((
  <BrowserRouter>
    <App/>
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
