import React, {Component} from "react"
import '../stylesheets/requests.css'
import {Button} from 'semantic-ui-react'
import app from 'firebase'
import axios from 'axios';
import * as profs from '../assets/professions.json';

class Requests extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      Name : '',
      usertype : 'Mentor',
      Abstract : '',
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
    event.preventDefault();
    const db = app.database()

    if(this.state.Name !== '' && this.state.Abstract !== '')
    {

      var logError = function(res) {console.log(res)}
      axios.post(`https://apiv2.indico.io/texttags`,
        JSON.stringify({
          'api_key' : "72e96d569596102c2948c3ace6ad16fe",
          'data': this.state.Abstract,
          'threshold' : 0.1,
          'independent' : true
        })
      )
      .then(res => {
        for(let i of Object.keys(res.data.results))
        {
          if (profs.professions.includes(i))
          {
            db.ref(this.state.usertype + '/' + this.state.Name).update({
                Tags: Object.keys(res.data.results)
            })

            db.ref('Tags/' + i + '/').update({
              [this.state.usertype] : [this.state.Name]
            })
          }
        }
      })
      .catch(logError)

      db.ref(this.state.usertype + '/' + this.state.Name).update({
        Abstract : this.state.Abstract
      })
    }
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
