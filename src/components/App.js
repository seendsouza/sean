import React, { Component } from 'react';
// move logo to public folder
import '../stylesheets/App.css';
import NavBar from './navbar';
import Footer from './footer';
import Routes from '../routes';
import app from "./firebase";

class App extends Component {
  componentDidMount() {
    var db = app.database();

    function writeUserData(username, name, email, abstract) {
      //var new_user_ref = app.database().ref('Users/').push();
      db.ref('Users/' + username).set({
        username,
        abstract,
        email,
        name,
      });
    }
    writeUserData("busername", "bame","bemail", "babstract");

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

    writeMentorData("bentorname", "bame","bam@bob", "tag1");

    function readMentorsfromTags(tags)
    {
      var dbref = db.ref(`Tags/${tags}/Mentors`);
      console.log(dbref);
    }
    readMentorsfromTags("tag1");

  }

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
