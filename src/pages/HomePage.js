import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Logo from "../img/logo.jpg";
import "../styles/HomePage.css";
import { LatestTransactions } from "./LatestTransactions";
import { PieChart } from "./PieChart";

export const HomePage = () => {
  const [mask, setMask] = useState(true);
  const [num, setNum] = useState(0);
  const { logout, user } = useAuth();

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => setNum(randomNumberInRange(1, 1000000)), []);

  return (
    <div className="container">
      {/* Page Content */}
      <div className="navbar">
        {/* Navigation Bar */}
        <Navbar bg="primary" expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-links">
              <Link to="/aboutus" className="nav-link">
                About Us
              </Link>
              <Link to="/home" className="nav-link">
                Home
              </Link>
              <Link to="/profileedit" className="nav-link">
                Edit Profile
              </Link>
              <button onClick={logout} className="nav-link logout-button">
                Logout
              </button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <p className="company_title">
          <img src={Logo} alt="Company Logo" />
          <h1>Yew Ohh Bee</h1>
        </p>
        <div>
          <h1>Account Balance: {mask ? " ******" : `$${num}`}</h1>
          <Button variant="warning" onClick={() => setMask(!mask)}>
            Show Account Balance
          </Button>
        </div>

        <Button variant="dark">Deposit</Button>
        <Button variant="dark">Withdraw</Button>
      </div>
      <div className="content">
        <h2>Welcome Home, {user.firstName}</h2>
        <div className="dashboard-container">
          <div className="dashboard-content">
            <div className="dashboard-section">
              <div className="latest_transactions">
                <LatestTransactions />
              </div>
              <div className="Pie_chart">
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
