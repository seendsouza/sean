import React, { Component } from 'react';
// move logo to public folder
import '../stylesheets/App.css';
import NavBar from './navbar';
import Footer from './footer';
import Routes from '../routes';
import app from "./firebase";

import indico from 'indico.io';

class App extends Component {
  componentDidMount() {
    var db = app.database();

    indico.apiKey =  '72e96d569596102c2948c3ace6ad16fe';

    var response = function(res) { console.log(res); }
    var logError = function(err) { console.log(err); }

    var professions = [anthropology, architecture, art, astronomy, aviation, baseball, bicycling, biology, books, business, cars, climbing, comedy, cooking, crafts, cricket, design, diy, economic_discussion, education, electronics, energy, environmental, fashion, fiction, film, fishing, fitness, gaming, gardening, gender_issues, general_food, golf, health, history, individualist_politics, investment, jobs, math, medicine, military, music, news, nutrition, parenting, personal, personal_care_and_beauty, personalfinance, pets, philosophy, photography, poetry, programming, psychology, realestate, relationships, romance, running, sailing, school, science, scuba, singing, skateboarding, soccer, sports, startups_and_entrepreneurship, surfing, swimming, technology, television, tennis, travel, ultimate, weather, weight_training, wine, wrestling, writing, yoga]

    function writeMentorData(mentorname, name, email, tags) {
      //var new_user_ref = app.database().ref('Users/').push();
      db.ref('Mentors/' + mentorname).set({
        mentorname,
        name,
        email,
        tags,
      });

      var tagname = db.ref(`Tags/${tags}/Mentors`);
      tagname.update({
        mentorname :{
          name,
          email
        }
      });
      //  tagname.push(mentorname : {name : name, email : email})
    }

    function readMentorsfromTags(tags)
    {
      var dbref = db.ref(`Tags/${tags}/Mentors`);
      console.log(dbref);
    }
    readMentorsfromTags("tag1");

    function writeUserData(username, name, email, abstract) {

      db.ref('Users/' + username).set({
        username,
        email,
        name,
      });

      indico.textTags(abstract)
        .then(response)
        .catch(logError);

      for (var key in response)
      {
        if (response[key] >= 0.85)
        {
          if (key in professsions)
          {
            var tagname2 = db.ref(`Tags/${key}/Users`);
            tagname2.update({
              username :{
                name,
                email
              }
            });
          }
        }
      }
    }
    /* batch example
    var batchInput = [
        "I love writing code!",
        "Alexander and the Terrible, Horrible, No Good, Very Bad Day"
    ];
    indico.sentiment(batchInput)
      .then(response)
      .catch(logError);
      */
  }//Ending of ComponentDidMount - VERY VERY IMPORTANT

  render() {
    return (
      <div className="App">
      <NavBar/>
        <Routes />
        <Footer/>
      </div>
    );
  }
}
export default App;
