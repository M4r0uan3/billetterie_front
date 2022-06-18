import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Events from "./components/events";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";
import React from "react";
import EventForm from "./components/eventForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/events/:id" element={<EventForm />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/" element={<Navigate to="/events" />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
