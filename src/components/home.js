import React, { Component } from "react";
import '../stylesheets/home.css';
import IndianGirls from '../assets/indian-karate-girls.jpg'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img src={IndianGirls} />
      </div>
    );
  }
}

export default Home;
