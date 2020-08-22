import React from 'react'
import axios from 'axios'
import {ButtonToolbar, SplitButton, MenuItem} from 'react-bootstrap'
import Validate from '../functions/Validate'
import '../styles/Login.css'

var PostLink = 'patient/signup'

class Signup extends React.Component<{}, {email: string, password: string, phone: string, zip: string}> {
  
    constructor(props: string) {
        super(props)
        this.state = {email:'', password: '', phone:'', zip:''}
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleZip = this.handleZip.bind(this)
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

    handlePhone(event: any) {
        this.setState({phone: event.target.value})
        Validate(this.state.phone, 'phone')
    }

    handleZip(event: any) {
        this.setState({zip: event.target.value})
        Validate(this.state.zip, 'zip')
    }

    handleSubmit() {
        axios.post('3.224.66.200:5000/auth/'+PostLink, this.state)
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
              <div className='form-group'>
                <input type='tel' className='form-control' id='exampleInputPhone1' placeholder='Phone Number' value={this.state.phone} onChange={this.handlePhone}></input>
              </div>
              <div className='form-group'>
                <input type='number' className='form-control' id='exampleInputZipcode1' placeholder='Zipcode' value={this.state.zip} onChange={this.handleZip}></input>
              </div>
              <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        )
    }
}

export default Signup