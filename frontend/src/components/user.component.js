import React, { Component } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: "",
    };
  }
  componentDidMount() {
    const { userId } = this.props.match.params;
    const url = `http://localhost:5000/user/${userId}`;
    axios.get(url).then((userData) => {
      console.log(userData.data);
      this.setState({
        user: userData.data[0].email,
      });
    });
  }
  render() {
    console.log();
    return (
      <div>
        <h1>user Home Screen</h1>
        <h1>{this.state.user}</h1>
      </div>
    );
  }
}
