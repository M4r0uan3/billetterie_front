import React from "react";
import Customers from "./customers";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Billetterie
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/events">
              Events
            </NavLink>

            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
            {!user && (
              <React.Fragment>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>

                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
