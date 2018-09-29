import React, {Component} from "react";
import '../stylesheets/register.css';
import {Button} from 'semantic-ui-react'

class Register extends Component {
  render() {
    return (<div className="Component">
      <form class="ui form">

        <div class="two fields">
          <div class="field">
            <label>Name:</label>
            <div class='ui input'>
              <input type='text' placeholder='Name'/>
            </div>
          </div>

          <div class="field">
            <label>Password:</label>
            <div class='ui input'>
              <input type='text' placeholder='Name'/>
            </div>
          </div>
        </div>

        <div class="field">
          <label>Mentor/User:</label>
          <div class='ui buttons'>
            <select class="" name="">
              <option value="Mentor">Mentor</option>
              <option value="User">User</option>
            </select>
          </div>
        </div>

        <div class="field">
          <label>Email:</label>
          <div class='ui input'>
            <input type='text' placeholder='Email'/>
          </div>
        </div>

        <div class="field">
          <label>Level of Education:</label>
          <div class='ui input'>
          <select class="" name="">
            <option value="Highschool">Highschool</option>
            <option value="University Undergrad">Universty Undergrad</option>
            <option value="Professor/Doctor">Professor/Doctor</option>
          </select>
        </div>
        </div>
        <Button type="submit" class="button">Submit</Button>

    </form>
  </div>);
  }
}

export default Register
