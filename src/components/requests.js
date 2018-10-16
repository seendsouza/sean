import React, {Component} from "react"
import '../stylesheets/requests.css'
import {Button} from 'semantic-ui-react'
import app from 'firebase'
import indico from 'indico.io';

class Requests extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      Name : '',
      usertype : 'User',
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
    event.preventDefault();
    var db = app.database()

    var response = function(res) { console.log(res); }
    var logError = function(err) { console.log(err); }

    var professions = ["anthropology", "architecture", "art", "astronomy", "aviation", "bicycling", "biology", "books", "business", "climbing", "cooking", "crafts", "design", "diy", "economic_discussion", "education", "electronics", "energy", "environmental", "film", "fishing", "fitness", "gaming", "gardening", "gender_issues", "general_food", "health", "history", "investment", "jobs", "math", "medicine", "military", "music", "news", "nutrition", "parenting", "personal", "personalfinance", "philosophy", "photography", "programming", "psychology", "realestate", "relationships", "running", "school", "science", "scuba", "singing", "sports", "startups_and_entrepreneurship", "technology", "travel", "weather", "writing", "yoga"]

    indico.ApiKey = '72e96d569596102c2948c3ace6ad16fe';

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://apiv2.indico.io/texttags'
fetch(proxyUrl + targetUrl, {
  method: 'POST',
  headers : {
    'X-ApiKey' : indico.ApiKey
  },
  body : JSON.stringify({
    'api_key' : indico.ApiKey,
    'Abstract' : this.state.Abstract,
    'threshold' : 0.85,
    'independent' : true
  }),
}).then(response)

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
