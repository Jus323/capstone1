import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css"; // same style as for Loginpage
import { useAuth } from "../hooks/useAuth";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { addUser, login } = useAuth();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    contactNumber: "",
    nric: "",
    dateOfBirth: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword === user.password) {
      addUser(user).then((created) => {
        if (created) {
          alert("User created");
          login(user)
          navigate("/login");
        } else {
          alert("User exists");
        }
      });
    } else {
      alert("passwords do not match");
    }
  };

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const handleFirstNameChange = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };
  const handleLastChange = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleAddressChange = (e) => {
    setUser({ ...user, address: e.target.value });
  };
  const handleContactNumberChange = (e) => {
    setUser({ ...user, contactNumber: e.target.value });
  };
  const handleNricChange = (e) => {
    setUser({ ...user, nric: e.target.value });
  };
  const handleDateOfBirthChange = (e) => {
    setUser({ ...user, dateOfBirth: e.target.value });
  };

  return (
    <div className="app">
      <div className="login-form">
        <h1>Register Account</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              value={user.email}
              id="email"
              onChange={handleEmailChange}
              placeholder="Email"
              required
            ></input>
          </div>
          <div>
            <input
              type="password"
              value={user.password}
              onChange={handlePasswordChange}
              id="password"
              placeholder="Password"
              required
            ></input>
          </div>
          <div>
            <input
              type="password"
              value={user.confirmPassword}
              onChange={handleConfirmPasswordChange}
              id="confirmPassword"
              placeholder="Confirm Password"
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={user.firstName}
              onChange={handleFirstNameChange}
              id="firstName"
              placeholder="First Name (optional)"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={user.lastName}
              onChange={handleLastChange}
              id="lastName"
              placeholder="Last Name (optional)"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={user.address}
              onChange={handleAddressChange}
              id="address"
              placeholder="Address (optional)"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={user.contactNumber}
              onChange={handleContactNumberChange}
              id="contactNumber"
              placeholder="Contact Number (optional)"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={user.nric}
              onChange={handleNricChange}
              id="nric"
              placeholder="NRIC (optional)"
            ></input>
          </div>
          <div>
            <input
              placeholder="Date of Birth (optional)"
              value={user.dateOfBirth}
              onChange={handleDateOfBirthChange}
              id="dateOfBirth"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            ></input>
          </div>

          <button type="submit">Submit</button>
          <RouterLink to="/">
            <button className="secondary">Back</button>
          </RouterLink>
        </form>
      </div>
    </div>
  );
};
