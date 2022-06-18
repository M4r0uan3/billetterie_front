import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class LoginForm extends Form {
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  doSubmit() {
    console.log("Submitted");
  }
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
