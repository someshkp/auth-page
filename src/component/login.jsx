import React from 'react';

import './login.style.scss';

import CoustomButton from './custom-button/custom-button';

import FormInput from './form-input/form-input';

import { auth } from '../firebase/firebase.utils'

import DialogBox from "./dialog-box/dialog-box";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      user: null,
      error: null,
      dialog: false
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({dialog: false})
    try {
      
      const {email, password} = this.state;
      const res = await auth.signInWithEmailAndPassword(email, password)
      this.setState({ user: res.user })
      this.setState({email: '', password: ''})

    } catch (err) {
      this.setState({ error: err.message })
      this.setState({email: '', password: ''})
    }
    
    this.setState({dialog: true})
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleClose = event =>{
    this.setState({dialog: false});
  }


  render() {
    return (
      <div className='log-in'>
        <h2>WELCOME</h2>
        <span>Please enter the Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
            />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
            />
          <div className='button'>
            <CoustomButton>SIGN IN</CoustomButton>
          </div>
        </form>
        {this.state.dialog && 
        <DialogBox  onClick = {this.handleClose}>
          Status
          {this.state.error && <div>{ this.state.error }</div> }
          {this.state.user && <div>Signed as { this.state.user.email }</div>}
          
        </DialogBox>
        }
      </div>
    );
  }
}


export default LogIn;