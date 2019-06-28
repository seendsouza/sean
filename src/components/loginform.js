import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../assets/logo.svg'
import app from 'firebase'

class LoginForm extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      username : 'Billybob',
      email : "Bilbo@gmail.com",
      password : "abcdef"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event)
  {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name] : value
    })
  }

  handleSubmit(event)
  {
    event.preventDefault();
    if (this.state.username !== '' && this.state.email !== '' && this.state.password !== '')
    {
      const auth = app.auth();
      const db = app.database();
      var users = [];

      db.ref('Mentor').once('value')
      .then(snap => {
        users = Object.keys(snap.val())
        console.log(users);
      })
      console.log(users);
      db.ref('User').once('value')
      .then(snap => {
        users.concat(Object.keys(snap.val()))
      })
      console.log(users);
      if(users.includes(this.state.username))
      {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
          console.log(error);
        })
      }
      else
      {
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
          console.log(error);
        })

        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
          console.log(error);
        })
      }
      console.log(auth.currentUser.uid);
    }
  }
  render() {
    return(
      <div className = "Component">
        <form className='login-form' onSubmit = {this.handleSubmit}>
                <h1>Login</h1>
                  <input
                    IconPosition='left'
                    placeholder='Username'
                    type = 'text'
                    name = 'username'
                    value = {this.state.username}
                    onChange = {this.handleChange}
                  />

                  <input
                    IconPosition='left'
                    placeholder='Email'
                    type = 'text'
                    name = 'email'
                    value = {this.state.email}
                    onChange = {this.handleChange}
                  />

                  <input
                    placeholder='Password'
                    type = 'password'
                    name = 'password'
                    value = {this.state.password}
                    onChange = {this.handleChange}
                  />
                  <Button color='teal' fluid size='large'>
                    Login
                  </Button>
              </form>
        </div>
    );
  }
}
export default LoginForm
