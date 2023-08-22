import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LatestTransactions } from "./LatestTransactions";
import { PieChart } from "./PieChart";
import "../styles/Homepage.css"; // Import your custom CSS file
import Logo from "../img/logo.jpg";

export const HomePage = () => {
  const [num, setNum] = useState(() => randomNumberInRange(1, 1000000));
  const [mask, setMask] = useState(true);
  const { logout, user } = useAuth();

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="container">
      <div className="navbar">
        <p className="company_title">
          <img src={Logo} alt="Company Logo" />
          <h1 >Yew Ohh Bee</h1>
        </p>
        <div>
            <h1>Account Balance: {mask ? " ******" : `$${num}`}</h1>
            <Button variant="warning" onClick={() => setMask(!mask)}>
              Show Account Balance
            </Button>
          </div>

          <Button variant="dark">Deposit</Button>
          <Button variant="dark">Withdraw</Button>
          <button onClick={logout}>Logout</button>

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

          <p className="message">
            Profile Edit &nbsp;
            <RouterLink to="/profileedit">Update Profile</RouterLink>
          </p>
      </div>
    </div>
  );
};