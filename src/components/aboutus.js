import React, { Component } from "react";
import logo from '../assets/logo.svg';
import '../stylesheets/aboutus.css';
import NavBar from './navbar';
import Footer from './footer';

class AboutUs extends Component {
  render() {
    return (
      <div className="AboutUs">
      <NavBar/>
        <header className="AboutUs-header">
          <img src={logo} className="AboutUs-logo" alt="logo" />
          <h1 className="AboutUs-title">Welcome to React</h1>
        </header>
        <p className="AboutUs-intro">
          ABOUT US 
        </p>
        <Footer/>
      </div>
    );
  }
}

export default AboutUs
