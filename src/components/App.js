import React, { Component } from 'react';
// move logo to public folder
import logo from '../assets/logo.svg';
import '../stylesheets/App.css';
import NavBar from './navbar';
import Footer from './footer';


class App extends Component {
  render() {
    return (

      <div className="App">
      <NavBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
