import React from 'react'
import axios from 'axios'
import {ButtonToolbar, SplitButton, MenuItem} from 'react-bootstrap'
import Validate from '../functions/Validate'
import '../styles/Login.css'
require('dotenv').config()

var PostLink = 'patient/signup'

class Login extends React.Component<{}, {email: string, password: string}> {
    constructor(props: string) {
        super(props)
        this.state = {email:'', password: ''}
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleDDrop = this.handleDDrop.bind(this)
        this.handlePDrop = this.handlePDrop.bind(this)
    }

    handleEmail(event: any) {
        this.setState({email: event.target.value})
        Validate(this.state.email, 'email')
    }

    handlePassword(event: any) {
        this.setState({password: event.target.value})
        Validate(this.state.password, 'pass')
    }

    handleSubmit() {
        axios.post('3.224.66.200:5000/auth/' + PostLink, this.state)
    }

    handlePDrop(){
        PostLink = 'patient/signup'
      }
  
      handleDDrop(){
        PostLink = 'doctor/signup'
      }

    render() {
        return (
            <div>
            <ButtonToolbar>
            <SplitButton title='Sign Up Options' pullRight id='split-button-pull-right' bsStyle='primary'>
                <MenuItem eventKey='1' onClick={this.handlePDrop}>Patient Signin</MenuItem>
                <MenuItem eventKey='2' onClick={this.handleDDrop}>Doctor Signin</MenuItem>
            </SplitButton>
          </ButtonToolbar>
            <form>
              <div className='form-group'>
                <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Email' value={this.state.email} onChange={this.handleEmail}></input>
              </div>
              <div className='form-group'>
                <input type='password' className='form-control' id='exampleInputPassword1' placeholder='Password' value={this.state.password} onChange={this.handlePassword}></input>
              </div>
              <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
            </form>
            </div>
        )
    }
}

export default Login