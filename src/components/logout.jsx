import React, { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    // localStorage.removeItem("access_token");
    // localStorage.removeItem("refresh_token");
    auth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
