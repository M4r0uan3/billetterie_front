import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { login } from "../services/authService";

class LoginForm extends Form {
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.username, data.password);
      console.log(jwt);
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data.detail;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div className="col-6 mx-auto">
        <h1>Login Form</h1>
        <form onSubmit={this.handlesubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          <div>{this.renderButton("login")}</div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
