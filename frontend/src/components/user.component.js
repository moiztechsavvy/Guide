import React, { Component, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
export default class User extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios.get("http://localhost:5000/user/1").then((userData) => {
      console.log(userData.data);
      console.log(this.props.location.search);
    });
  }
  render() {
    return (
      <div>
        <h1>user Home Screen</h1>
      </div>
    );
  }
}
