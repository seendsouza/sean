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

              <h3>Name:</h3>
              <div class='ui input'>
                <input type='text' placeholder='Name' />
              </div>

              <div>
                <p> </p>
              </div>



              <h3>Password:</h3>
              <div class='ui input'>
                <input type='text' placeholder='Password' />
              </div>

              <div>
                <p> </p>
              </div>


              <h3>Mentor/User:</h3>
                <div>
                <select class="" name="">
                  <option value="Mentor">Mentor</option>
                  <option value="User">User</option>
                </select>
                </div>


              <div>
                <p> </p>
              </div>



              <h3>Email:</h3>
              <div class='ui input'>
                <input type='text' placeholder='Email' />
              </div>


              <div>
                <p> </p>
              </div>



              <h3>Level of Education:</h3>
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
