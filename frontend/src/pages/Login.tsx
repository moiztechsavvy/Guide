import React from "react";
import axios from "axios";
import { ButtonToolbar, SplitButton, MenuItem } from "react-bootstrap";
import SubmitButton from "../components/SubmitButton";
import Validate from "../functions/Validate";
import "../styles/Login.css";
require("dotenv").config();

var PostLink = "patient/signup";

class Login extends React.Component<{}, { email: string; password: string }> {
  //   constructor(props: string) {
  //     super(props);
  //     this.state = { email: "", password: "" };
  //     this.handleEmail = this.handleEmail.bind(this);
  //     this.handlePassword = this.handlePassword.bind(this);
  //     this.handleDDrop = this.handleDDrop.bind(this);
  //     this.handlePDrop = this.handlePDrop.bind(this);
  //   }

  //   handleEmail(event: any) {
  //     this.setState({ email: event.target.value });
  //     Validate(this.state.email, "email");
  //   }

  //   handlePassword(event: any) {
  //     this.setState({ password: event.target.value });
  //     Validate(this.state.password, "pass");
  //   }

  //   handleSubmit() {
  //     axios
  //       .get("http://localhost:5000/auth/login")
  //       .then((respone) => console.log(respone));
  // console.log(this.state)
  //     axios
  //       .post("http://localhost:5000/auth/login", this.state)
  //       .then((respone) => console.log(respone));
  //   }

  //   handlePDrop() {
  //     PostLink = "patient/signup";
  //   }

  //   handleDDrop() {
  //     PostLink = "doctor/signup";
  //   }

  //   render() {
  //     return (
  //       <div>
  //         {/* <ButtonToolbar>
  //             <SplitButton title='Sign Up Options' pullRight id='split-button-pull-right' bsStyle='primary'>
  //                 <MenuItem eventKey='1' onClick={this.handlePDrop}>Patient Signin</MenuItem>
  //                 <MenuItem eventKey='2' onClick={this.handleDDrop}>Doctor Signin</MenuItem>
  //             </SplitButton>
  //           </ButtonToolbar> */}
  //         <div className="form-group">
  //           <input
  //             type="email"
  //             className="form-control"
  //             id="exampleInputEmail1"
  //             aria-describedby="emailHelp"
  //             placeholder="Email"
  //             value={this.state.email}
  //             onChange={this.handleEmail}
  //           ></input>
  //         </div>
  //         <div className="form-group">
  //           <input
  //             type="password"
  //             className="form-control"
  //             id="exampleInputPassword1"
  //             placeholder="Password"
  //             value={this.state.password}
  //             onChange={this.handlePassword}
  //           ></input>
  //         </div>
  //         <SubmitButton backColor="chocolate" callback={this.handleSubmit()} />
  //       </div>
  //     );
  //   }
  constructor(props: string) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleInputChange = (event: any) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    } as any);
  };
  onSubmit = (event: any) => {
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    event.preventDefault();
    console.log("we got here");
    axios
      .get("http://localhost:5000/auth/login")
      .then((respone) => console.log(respone));
    console.log(data);
    axios.post("http://localhost:5000/auth/login", data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log("and the got here");
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
