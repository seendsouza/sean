import React, { Component } from 'react';
// move logo to public folder
import logo from '../assets/logo.svg';
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
    writeUserData("bob", "sam","bob@bob", "bob");

    function writeMentorData(mentorname, name, email, tags) {
      //var new_user_ref = app.database().ref('Users/').push();
      db.ref('Mentors/' + mentorname).set({
        mentorname,
        name,
        email,
        tags,
      });
    }
    writeMentorData("bob", "sam","bob@bob", "bob");
  }

  /*const db = app.database();
  function writeUserData(username, name, email, abstract) {
    //var new_user_ref = app.database().ref('Users/').push();
    db.ref('Users/' + username).set({
      username,
      abstract,
      email,
      name,
    });
  }
  writeUserData("bob","bob","bob@bob","bob");*/
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
