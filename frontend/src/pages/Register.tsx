import React from 'react'
import axios from 'axios'
import Validate from '../functions/Validate'
import '../styles/Login.css'

class Register extends React.Component<{}, {emailInput: string, passwordInput: string, phoneInput: string, zipInput: string}> {
    constructor(props: string) {
        super(props)
        this.state = {emailInput:'', passwordInput: '', phoneInput:'', zipInput:''}
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleZip = this.handleZip.bind(this)
    }

    handleEmail(event: any) {
        this.setState({emailInput: event.target.value})
        Validate(this.state.emailInput, 'email')
    }

    handlePassword(event: any) {
        this.setState({passwordInput: event.target.value})
        Validate(this.state.passwordInput, 'pass')
    }

    handlePhone(event: any) {
        this.setState({phoneInput: event.target.value})
        Validate(this.state.phoneInput, 'phone')
    }

    handleZip(event: any) {
        this.setState({zipInput: event.target.value})
        Validate(this.state.zipInput, 'zip')
    }

    handleSubmit() {
        axios.post('3.224.66.200:5000/auth', this.state.emailInput)
        axios.post('3.224.66.200:5000/auth', this.state.passwordInput)
        axios.post('3.224.66.200:5000/auth', this.state.phoneInput)
        axios.post('3.224.66.200:5000/auth', this.state.zipInput)
    }

    render() {
        return (
            <form>
              <div className='form-group'>
                <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Email' value={this.state.emailInput} onChange={this.handleEmail}></input>
              </div>
              <div className='form-group'>
                <input type='password' className='form-control' id='exampleInputPassword1' placeholder='Password' value={this.state.passwordInput} onChange={this.handlePassword}></input>
              </div>
              <div className='form-group'>
                <input type='tel' className='form-control' id='exampleInputPhone1' placeholder='Phone Number' value={this.state.phoneInput} onChange={this.handlePhone}></input>
              </div>
              <div className='form-group'>
                <input type='number' className='form-control' id='exampleInputZipcode1' placeholder='Zipcode' value={this.state.zipInput} onChange={this.handleZip}></input>
              </div>
              <button type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default Register