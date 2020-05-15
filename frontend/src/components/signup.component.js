import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeZipCode = this.onChangeZipCode.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeState = this.onChangeState.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.flag = 0;
    this.errorMessage = "";

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      Address: "",
      State: "",
      ZipCode: "",
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/")
  //     .then((response) => {
  //       if (response.data.length > 0) {
  //         console.log(response.data);
  //         this.setState({
  //           users: response.data.map((user) => user.name),
  //           email: response.data[0].name,
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  onChangeState(e) {
    this.setState({
      State: e.target.value,
    });
  }
  onChangeZipCode(e) {
    this.setState({
      ZipCode: e.target.value,
    });
  }
  onChangeAddress(e) {
    this.setState({
      Address: e.target.value,
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      Address: this.state.Address,
      State: this.state.State,
      ZipCode: this.state.ZipCode,
    };
    console.log(user);
    axios
      .post("http://localhost:5000/auth/signup", user)
      .then((res) => {
        console.log(res);
        this.flag = 0;
      })
      .catch((err) => {
        this.flag = 1;
        this.errorMessage = err.response.data.message;
        console.log(err.response.data.message);
      });

    // window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name </label>
            <input
              type="text"
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name </label>
            <input
              type="text"
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
              required
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <label>Address </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Address}
              onChange={this.onChangeAddress}
              required
            />
          </div>
          <div className="form-group">
            <label>State </label>
            <input
              type="text"
              className="form-control"
              value={this.state.state}
              maxLength="2"
              onChange={this.onChangeState}
              required
            />
          </div>
          <div className="form-group">
            <label>ZipCode </label>
            <input
              type="text"
              className="form-control"
              value={this.state.ZipCode}
              maxLength="5"
              onChange={this.onChangeZipCode}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Account"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
