import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Events from "./components/events";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";
import axiosInstance from "./axios";
import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import EventForm from "./components/eventForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/logout";

class App extends Component {
  state = {};
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("access_token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Routes>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/events/:id" element={<EventForm />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/" element={<Navigate to="/events" />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
