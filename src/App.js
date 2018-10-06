import React, { Component } from 'react';
<<<<<<< HEAD
// move logo to public folder
import './stylesheets/App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Routes from './routes';
=======
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import Footer from './footer';
import './firebase';
>>>>>>> f8e6efa7da1e82d7f9c9cc07a7de2fc3400cb57f

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
