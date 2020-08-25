import React from 'react'
import axios from 'axios'
import '../styles/Login.css'
require('dotenv').config()

class Login extends React.Component<{}, { type: string, email: string; password: string, error: string }> {
    constructor(props: string) {
        super(props)
        this.state = {
            type: '',
            email: '',
            password: '',
            error: ''
        }
    }

    handleInputChange = (event: any) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        } as any)
    }

    onSubmit = (event: any) => {
        let data = {
            email: this.state.email,
            password: this.state.password
        }
        
        event.preventDefault();
        axios.post('http://localhost:5000/auth/login', data).then(
            (response) => {
                if (response.data.userId) {
                    window.location.href = (this.state.type + '/' + response.data.userId)
                } else {
                    this.setState({
                        error: response.data.message
                    })
                }
            }
        )
    }
    
    render() {
        return(
            <form onSubmit={this.onSubmit}>
              <div>
                <select
                  name='type'
                  value={this.state.type}
                  onChange={this.handleInputChange}
                  required
                >
                  <option value='' disabled>Select user type</option>
                  <option value='patient'>Patient</option>
                  <option value='doctor'>Doctor</option>
                </select>
              </div>
              <div>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter email'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div>
                <input
                  type='password'
                  name='password'
                  placeholder='Enter password'
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <input type='submit' value='Submit' />
              {this.state.error && <p>{this.state.error}</p>}
            </form>
        )
    }
}

export default Login
