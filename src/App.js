import "./App.css";
import { ToastContainer } from "react-toastify";
import Events from "./components/events";
import NotFound from "./components/notFound";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";
import React, { Component } from "react";
import EventForm from "./components/eventForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/logout";
import auth from "./services/authService";
import OrderConfirmed from "./components/orderConfirmed";
import PrivateRoutes from "./utils/privateRoutes";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
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
            <Route element={<PrivateRoutes user={this.state.user} />}>
              <Route
                path="/events/:id"
                user={this.state.user}
                element={<EventForm />}
              ></Route>
              <Route path="/orders/:id" element={<OrderConfirmed />}></Route>
            </Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/" element={<Navigate to="/events" />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
