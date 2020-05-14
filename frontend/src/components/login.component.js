import React, { Component } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      flag: 0,
      errorMessage: "",
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/login", user)
      .then((res) => {
        console.log(res.data);
        this.setState({
          flag: 0,
        });
      })
      .catch((err) => {
        this.setState({
          flag: 1,
          errorMessage: err.response.data.message,
        });
        console.log(err.response.data.message);
      });

    this.setState({
      email: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        {this.state.flag === 1 && (
          <div class="alert alert-danger" role="alert">
            {this.state.errorMessage}
          </div>
        )}

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              required
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              required
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
