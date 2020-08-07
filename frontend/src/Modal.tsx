import React from 'react';``
import Validate from "./Validate"
import './Modal.css';
import axios from "axios"

class _Modal extends React.Component<{}, {emailInput: string, passwordInput: string}>{
    constructor(props){
        super(props)
        this.state = {emailInput:'', passwordInput: ''}
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

        handleEmail(event){
            this.setState({emailInput: event.target.value})
            Validate(this.state.emailInput, 'email')
        }

        handlePassword(event){
            this.setState({passwordInput: event.target.value})
            Validate(this.state.passwordInput, 'pass')
        }

        handleSubmit(){
            axios.post('3.224.66.200:5000/auth', this.state.emailInput)
            axios.post('3.224.66.200:5000/auth', this.state.passwordInput)
        }

        render(){
             return (
        
                    <form>
                         <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={this.state.emailInput} onChange={this.handleEmail}></input>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.passwordInput} onChange={this.handlePassword}></input>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </form>

            )
            }

      }; 
export default _Modal;