import React, { Component } from 'react';
// move logo to public folder
import '../stylesheets/App.css';
import NavBar from './navbar';
import Footer from './footer';
import Routes from '../routes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <Routes />
        <Footer/>
      </div>
    );
  }
}

export default App;
