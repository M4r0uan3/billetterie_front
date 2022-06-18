import Form from "./common/form";
import React from "react";
import Joi from "joi-browser";
class RegisterForm extends Form {
  schema = {
    username: Joi.string().required(),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
  };
  doSubmit() {
    console.log("Submitted");
  }
  render() {
    return (
      <div className="col-6 mx-auto">
        <h1>Register Form</h1>
        <form onSubmit={this.handlesubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          <div>{this.renderButton("Register")}</div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
