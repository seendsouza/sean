import React, { Component } from "react";
import '../stylesheets/template.css';
import NavBar from './navbar';
import Footer from './footer';

class Template extends Component {
  render() {
    return (
      <div className="Template">
      <NavBar/>

        <Footer/>
      </div>
    );
  }
}

export default Template
