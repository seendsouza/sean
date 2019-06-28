import React, { Component } from "react";
import '../stylesheets/home.css';
import app from 'firebase'

class Home extends Component {
  constructor(props)
  {
    super(props);
    const auth = app.auth();

    auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(uid);
    } else {
      console.log("Nobody's logged in right now.");
    }
  });
  }

  render() {
    return (
      <div className="Home">
        <div class="section1" >
          <h1>SEAN</h1>
          <h2>Giving information to developing countries.</h2>
        </div>
        <div class="section2" >
          <h1>Information</h1>
          <h2>Spreading knowledge to places it has never been before</h2>
        </div>
        <div class="section1" >
          <h1>Accessibility</h1>
          <h2>Easily access people to help solve problems</h2>
        </div>

      </div>
    );
  }
}

export default Home;
