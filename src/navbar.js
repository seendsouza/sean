import React, { Component } from 'react';
import logo from './logo.svg';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <header>
    <div class="container">
      <h1 class="logo"></h1>
      <nav>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Lessons</a></li>
          <li><a href="#">Tests</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
    );
  }
}

export default NavBar;
