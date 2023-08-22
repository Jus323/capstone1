<<<<<<< HEAD
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
export const HomePage = () => {

  const [num, setNum] = useState(0);
=======
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../styles/HomePage.css";
import { useAuth } from "../hooks/useAuth";

export const HomePage = () => {
  const [num, setNum] = useState(0);
  const { logout } = useAuth();
>>>>>>> 5ca3f8d712c37b642c5830c0eeb1f49895385e0e

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 1000000));
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="primary" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-links">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/profileedit" className="nav-link">
              Edit Profile
            </Link>
            <button onClick={logout} className="nav-link">
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Page Content */}
      <Container style={{ marginTop: "20px" }}>
        <h1>Welcome Home, User</h1>
        <div>
          <div>
            <h1>Account Balance: ${num}</h1>
            <Button variant="warning" onClick={handleClick}>
              Click to Show Account Balance
            </Button>{" "}
          </div>
          <Button variant="dark">Deposit</Button>{" "}
          <Button variant="dark">Withdraw</Button>{" "}
        </div>
      </Container>
    </div>
  );
};
