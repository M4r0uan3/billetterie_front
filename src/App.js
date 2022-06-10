import logo from "./logo.svg";
import "./App.css";
import Events from "./components/events";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";
import React from "react";
import EventForm from "./components/eventForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/events/:id" element={<EventForm />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/" element={<Navigate to="/events" />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
