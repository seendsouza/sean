import React, { Component } from "react";
import '../stylesheets/register.css';
import NavBar from './navbar';
import Footer from './footer';

class Template extends Component {
  render() {
    return (
      <div className="Template">
      <NavBar/>
      <form>
        <table>
          <tr>
            <td>
              Name:
            </td>
            <td>
              <input type="text" name="" placeholder="Name" value="">
            </td>
          </tr>

          <tr>
            <td>
              Password:
            </td>
            <td>
              <input type="password" name="" placeholder="Password" value="">
            </td>
          </tr>

          <tr>
            <td>
              Mentor/User:
            </td>
            <td>
              <input type="radio" name="Gender" value="">Mentor
              <input type="radio" name="Gender" value="">User
            </td>
          </tr>

          <tr>
            <td>
              Email:
            </td>
            <td>
              <input type="mail" name="" value="">
            </td>
          </tr>

          <tr>
            <td>
              Level of Education :
            </td>
            <td>
              <select class="" name="">
                <option value="Highschool">Highschool</option>
                <option value="University Undergrad">Universty Undergrad</option>
                <option value="Professor/Doctor">Professor/Doctor</option>
              </select>
            </td>
          </tr>
        </table>
        </form>
        <Footer/>
      </div>
    );
  }
}

export default Register
