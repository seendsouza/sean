import React from 'react';
import { Route } from 'react-router';

/***
* Import all page components here
*/
import App from './components/App'
import AboutUs from './components/aboutus'

export default (
  <Route path="/" component={App}>
    <Route exact component={App} />
    <Route path="/about-us" component={AboutUs} />
    <Route path="*" component={App} />
  </Route>
)
