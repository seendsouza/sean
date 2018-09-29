import React, { Component } from "react";
import '../stylesheets/register.css';
import { Button } from 'semantic-ui-react'

class Register extends Component {
  render() {
    return (
      <div className="Component">
      <form>

          <div>
            <p> </p>
          </div>

              Name:
              <div class='ui input'>
                <input type='text' placeholder='Name' />
              </div>

              <div>
                <p> </p>
              </div>



              Password:
              <div class='ui input'>
                <input type='text' placeholder='Password' />
              </div>

              <div>
                <p> </p>
              </div>


              Mentor/User:
              <div class='ui buttons'>
                <button class='ui button' role='' type="button">
                  Mentor
                </button>
                <div class='or' data-text='ou' />
                <button class='ui positive button' role='' type="button" >
                  User
                </button>
              </div>


              <div>
                <p> </p>
              </div>



              Email:
              <div class='ui input'>
                <input type='text' placeholder='Email' />
              </div>


              <div>
                <p> </p>
              </div>



              Level of Education:
              <div>
              <select class="" name="">
                <option value="Highschool">Highschool</option>
                <option value="University Undergrad">Universty Undergrad</option>
                <option value="Professor/Doctor">Professor/Doctor</option>
              </select>
              </div>
              <div>
              <button type="button" name="button">Submit</button>
              </div>
        </form>
      </div>
        
    );
  }
}

export default Register
