import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';

class App extends Component {
  render() {
    return (

      <div className="App">
      <NavBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      ////////////
      <script src="https://www.gstatic.com/firebasejs/5.5.1/firebase.js"></script>
        <script>
          // Initialize Firebase
          var config = {
            apiKey: "AIzaSyD1owOUZqfN4OJd0WRVMBAaiE4bfrNvQJs",
            authDomain: "yorkuhacks-f0a14.firebaseapp.com",
            databaseURL: "https://yorkuhacks-f0a14.firebaseio.com",
            projectId: "yorkuhacks-f0a14",
            storageBucket: "yorkuhacks-f0a14.appspot.com",
            messagingSenderId: "465255915789"
          };
          firebase.initializeApp(config);
        </script>
      ////////////
    );
  }
}

export default App;
