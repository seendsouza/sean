import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../stylesheets/navbar.css';

class NavBar extends Component {
  render() {
    return (
      <header>
    <div class="container">
      <h1 class="logo"></h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/requests">Requests</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
    );
  }
}

export default NavBar;
