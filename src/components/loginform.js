import React, { Component } from "react";
import { Button } from 'semantic-ui-react' //import {Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../assets/logo.svg';
import app from 'firebase'

class LoginForm extends Component
{
  constructor (props) {
    super(props);
    this.state = {
      Email : '',
      Pass : ''
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

  async handleSubmit(event)
  {
    event.preventDefault();
    const auth = app.auth();

    await auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch(error => {
      console.log(error)
    })
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form size='large' onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange = {this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <Button type="submit" class="button" value = "Submit">Submit</Button>
        </form>
      </div>
    );
  }
}
export default LoginForm
