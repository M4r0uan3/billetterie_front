import Form from "./common/form";
import React from "react";
import Joi from "joi-browser";
import { register } from "../services/userService";
import { useNavigate } from "react-router-dom";

class RegisterForm extends Form {
  schema = {
    username: Joi.string().required(),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const response = await register(data);
      
      console.log(response);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data.username;
        errors.email = ex.response.data.email;
        this.setState({ errors });
        console.log(ex.response);
      }
    }
  };
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
