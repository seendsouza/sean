import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../assets/logo.svg'

class LoginForm extends Component {
  render() {
return(
  <div className='login-form'>
          <h1>Login</h1>
        <form size='large'>
            <input iconPosition='left' placeholder='E-mail address' />
            <input
              placeholder='Password'
              type='password'
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
