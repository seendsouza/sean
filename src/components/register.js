import React, { Component } from "react";
import '../stylesheets/register.css';
import { Button } from 'semantic-ui-react'

class Register extends Component {
  render() {
    return (
      <div className="Component">
      <form>
              Name:
              <div class='ui input'>
                <input type='text' placeholder='Name' />
              </div>




              Password:
              <div class='ui input'>
                <input type='text' placeholder='Password' />
              </div>




              Mentor/User:
              <div class='ui buttons'>
                <button class='ui button' role='' type="button">
                  Mentor
                </button>
                <div class='or' data-text='ou' />
                <button class='ui positive button' role='' type="button">
                  User
                </button>
              </div>





              Email:
              <div class='ui input'>
                <input type='text' placeholder='Email' />
              </div>





              Level of Education:
              <select class="" name="">
                <option value="Highschool">Highschool</option>
                <option value="University Undergrad">Universty Undergrad</option>
                <option value="Professor/Doctor">Professor/Doctor</option>
              </select>

              <button type="button" name="button">Submit</button>
        </form>
      </div>

    );
  }
}

export default Register
