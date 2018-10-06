import React, { Component } from 'react';
// move logo to public folder
import Routes from '../routes';
import app from "./firebase";

import indico from 'indico.io';

class App extends Component {
  componentDidMount() {
    var db = app.database();

    indico.apiKey = '72e96d569596102c2948c3ace6ad16fe';

    var response = function(res) { console.log(res); }
    var logError = function(err) { console.log(err); }

    var professions = [anthropology, architecture, art, astronomy, aviation, bicycling, biology, books, business, climbing, cooking, crafts, design, diy, economic_discussion, education, electronics, energy, environmental, film, fishing, fitness, gaming, gardening, gender_issues, general_food, health, history, investment, jobs, math, medicine, military, music, news, nutrition, parenting, personal, personalfinance, philosophy, photography, programming, psychology, realestate, relationships, running, school, science, scuba, singing, sports, startups_and_entrepreneurship, technology, travel, weather, writing, yoga]

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

  }//Ending of ComponentDidMount - VERY VERY IMPORTANT

  render() {
    return (
      <div className="Backend">
      </div>
    );
  }
}
export default App;
