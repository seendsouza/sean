import React, { Component } from "react";
import '../stylesheets/aboutus.css';

class AboutUs extends Component {
  render() {
    return (
      <div className="AboutUs">
        <h1>About Us</h1>
        <ul>
          <li>265 million children are still out of school today </li>
          <li>57 million of which are children of primary age </li>
          <li>Worldwide, 617 million youth lack basic reading and math skills</li>

        </ul>
      </div>
    );
  }
}

export default AboutUs;
