import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css';
import logo from '../assets/logo.svg'

class NavBar extends Component {
  render() {
    return (
      <header>
    <div class="container">
      <img class="logo" src={logo}></img>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/requests">Requests</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  </header>
    );
  }
}

export default NavBar;
