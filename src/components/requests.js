import React, {Component} from "react"
import '../stylesheets/requests.css'
import {Button} from 'semantic-ui-react'
import app from 'firebase'

class Requests extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      Name : '',
      usertype : 'Mentor',
      Abstract : ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event)
  {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name] : value
    })
  }

  handleSubmit(event)
  {
    console.log('Name: ' + this.state.Name + '\nUser Type: ' + this.state.usertype + '\nAbstract: ' + this.state.Abstract);
    var db = app.database();
    db.ref(this.state.usertype + '/' + this.state.Name).update({
      Abstract : this.state.Abstract
    })
  }
  render() {
    return (
      <div className = "Component">
      <form class = "ui form" onSubmit = {this.handleSubmit}>
      <div class="field">
        <label>Name</label>
        <div class='ui input'>
          <input
          name = 'Name'
          type = 'text'
          value = {this.state.Name}
          onChange = {this.handleInputChange}
          placeholder = "Name"/>
        </div>
      </div>

        <div class="field">
          <label>Mentor/User</label>
          <div class='ui buttons'>
            <select
            class=""
            name='usertype'
            value = {this.state.usertype}
            onChange = {this.handleInputChange}>
              <option value="Mentor">Mentor</option>
              <option value="User">User</option>
            </select>
          </div>
        </div>

      <div class = "field">
        <label> Abstract </label>
          <textarea
          class="textarearerquests" rows = {20}
          name = "Abstract"
          value = {this.state.Abstract}
          onChange = {this.handleInputChange}/>
        </div>
      <Button type = "submit" class = "button"> Submit </Button>
    </form>
    </div>
    );
  }
}

export default Requests
