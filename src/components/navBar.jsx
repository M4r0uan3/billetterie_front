import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar as NavBarbs,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = ({ user }) => {
  return (
    <NavBarbs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <NavBarbs.Brand to="/" as={NavLink}>
          Billetterie
        </NavBarbs.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/events" as={NavLink}>
            Events
          </Nav.Link>
          {/* <Nav.Link to="/orders" as={NavLink}>
            Orders
          </Nav.Link> */}
        </Nav>
        {!user && (
          <React.Fragment>
            <Nav.Link to="/login" as={NavLink}>
              Login
            </Nav.Link>
            <Nav.Link to="/register" as={NavLink}>
              SingUp
            </Nav.Link>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <Button variant="light">
              <FaShoppingCart />
              <Badge pill bg="dark" className="m-1 sm">
                0
              </Badge>
            </Button>
            <Nav.Link to="/logout" as={NavLink}>
              Logout
            </Nav.Link>
          </React.Fragment>
        )}
      </Container>
    </NavBarbs>
  );
};

export default NavBar;
