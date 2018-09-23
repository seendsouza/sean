import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

/***
* Import all page components here
*/
import App from './components/App'
import AboutUs from './components/aboutus'
import Home from './components/home'
import Register from './components/register'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />\
        <Route path="/register" component={Register} />\
      </Switch>
    );
  }
}

export default Routes;

