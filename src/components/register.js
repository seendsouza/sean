import React, {Component} from "react"
import '../stylesheets/register.css'
import {Button} from 'semantic-ui-react'
import app from './firebase'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name : "",
      Pass : "",
      usertype : "Mentor",
      email : "",
      LvlofEdu : "Highschool"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(this.state)
    this.setState({
      [name] : value
    })
  }

  handleSubmit(event) {
    console.log(this.state.Name + "<-- Name\n" + this.state.Pass + "<-- Pass\n" + this.state.usertype + "<-- UserType\n" + this.state.email + "<-- Email\n" + this.state.LvlofEdu + "<-- Level of Education")
    console.log("Name: " + this.state.Name + "\nPass: " + this.state.Pass + "\nUserType: " + this.state.usertype + "\nEmail: " + this.state.email + "\nLevel of Education: " + this.state.LvlofEdu)
    var db = app.database();
    db.ref("Something/").set({
      "bob":"sam"
    })
    db.ref(this.state.usertype + '/' + this.state.Name).set({
      Pass: this.state.Pass,
      Email : this.state.email,
      LvlofEdu : this.state.LvlofEdu
    })
    alert('hold on a second');
  }

  render() {
    return (<div className="Component">
      <form class="ui form" onSubmit = {this.handleSubmit}>

        <div class="two fields">
          <div class="field">
            <label>Name:</label>
            <div class='ui input'>
              <input
                name = "Name"
                type = "text"
                value = {this.state.Name}
                onChange = {this.handleInputChange}
                placeholder = "Name"/>
            </div>
          </div>

          <div class="field">
            <label>Password:</label>
            <div class='ui input'>
              <input
              name = 'Pass'
              type='text'
              value = {this.state.Pass}
              onChange = {this.handleInputChange}
              placeholder='Password'/>
            </div>
          </div>
        </div>

        <div class="field">
          <label>Mentor/User:</label>
          <div class='ui buttons'>
            <select class=""
            name='usertype'
            value = {this.state.usertype}
            onChange = {this.handleInputChange}>
              <option value="Mentor">Mentor</option>
              <option value="User">User</option>
            </select>
          </div>
        </div>

        <div class="field">
          <label>Email:</label>
          <div class='ui input'>
            <input
            name = 'email'
            type='text'
            value = {this.state.email}
            onChange = {this.handleInputChange}
            placeholder='Email'/>
          </div>
        </div>

        <div class="field">
          <label>Level of Education:</label>
          <div class='ui input'>
          <select class=""
          name='LvlofEdu'
          value = {this.state.LvlofEdu}
          onChange = {this.handleInputChange}>
            <option value="Highschool">Highschool</option>
            <option value="University Undergrad">Universty Undergrad</option>
            <option value="Professor/Doctor">Professor/Doctor</option>
          </select>
        </div>
        </div>
        <Button type="submit" class="button" value = "Submit">Submit</Button>
    </form>
  </div>);
  }
}

export default Register
