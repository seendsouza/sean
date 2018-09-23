import React, {Component} from "react";
import '../stylesheets/register.css';
import {Button} from 'semantic-ui-react'
import App from 'firebase'

class Register extends Component {
  handleNameChange(event)
  {
    this.setState({Name: e.target.value});
  }
  handlePasswordChange(event)
  {
    this.setState({Password: e.target.value});
  }
  handleEmailChange(event)
  {
    this.setState({email: e.target.value});
  }

  handleUserChange(event)
  {
    this.setState({User: e.target.value});
  }
  handleLvlEduChange(event)
  {
    this.setState({LvlEdu: e.target.value});
  }

  handleChange(event)
  {
    this.setState({})
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
}
    handleSubmit(event) {
      console.log("Name: " + this.state.name);
      event.preventDefault();
    }
  render() {
    return (<div className="Component">
      <form class="ui form" onSubmit={this.handleSubmit}>

        <div class="two fields">
          <div class="field">
            <label>Name:</label>
            <div class='ui input'>
              <input name = "Name" input type='text' value = {this.state.Name} onChange = {this.handleNameChange} placeholder='Name'/>
            </div>
          </div>

          <div class="field">
            <label>Password:</label>
            <div class='ui input'>
              <input type='text' input name = 'Password' placeholder='Name'/>
            </div>
          </div>
        </div>

        <div class="field">
          <label>Mentor/User:</label>
          <div class='ui buttons'>
            <select value = {this.state.value} onChange={this.handleChange} class="" name="">
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
          <input type = "submit" value = "Submit"/>
        </div>
        </div>
        <Button type="submit" class="button">Submit</Button>

    </form>
  </div>);
  }
}

export default Register
