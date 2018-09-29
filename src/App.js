import React, { Component } from 'react';
// move logo to public folder
import './stylesheets/App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Routes from './routes';

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
