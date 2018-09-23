import React, { Component } from "react";
import '../stylesheets/register.css';

class Register extends Component {
  render() {
    return (
      <div className="Template">
      <form>
              Name:
              <input type="text" name="" placeholder="Name" value="" />
              Password:
              <input type="password" name="" placeholder="Password" value="" />
              Mentor/User:
              <input type="radio" name="Gender" value="" />Mentor
              <input type="radio" name="Gender" value="" />User
              Email:
              <input type="mail" name="" value="" />
              Level of Education :
              <select class="" name="">
                <option value="Highschool">Highschool</option>
                <option value="University Undergrad">Universty Undergrad</option>
                <option value="Professor/Doctor">Professor/Doctor</option>
              </select>
        </form>
      </div>
    );
  }
}

export default Register
