import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "../styles/LoginPage.css"; // same style as for Loginpage


export const ProfileEditPage = () => {
  const { editProfile } = useAuth();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    address: "",
    contactNumber: "",
    nric: "",
    dateOfBirth: "",
  });

  const navigate = useNavigate();

  const handleupdateclick = (e) => {
    e.preventDefault();
    editProfile(user).then((success) => {
      if (!success) {
        alert("Please check your inputs! :(");
      }
    });
    
    
    navigate("/home");
  };
  const handlecancelclick = () => {
    navigate("/register");
  };
  const handleFirstNameChange = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };
  const handleLastNameChange = (e) => {
    setUser({ ...user, lastName: e.target.value });
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
        <h1>Manage Your Profile</h1>

          <form onSubmit={handleupdateclick}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              value={user.firstName}
              onChange={handleFirstNameChange}
              id="firstName"
            ></input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              value={user.lastName}
              onChange={handleLastNameChange}
              id="lastName"
            ></input>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              value={user.address}
              onChange={handleAddressChange}
              id="address"
            ></input>
          </div>
          <div>
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              value={user.contactNumber}
              onChange={handleContactNumberChange}
              id="contactNumber"
            ></input>
          </div>
          <div>
            <label htmlFor="nric">NRIC</label>
            <input
              type="text"
              value={user.nric}
              onChange={handleNricChange}
              id="nric"
            ></input>
          </div>
          <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              value={user.dateOfBirth}
              onChange={handleDateOfBirthChange}
              id="dateOfBirth"
            ></input>
          </div>
          
          <button onClick={handleupdateclick}>Update</button>
          <button onClick={handlecancelclick}>Cancel</button>
        </form>
      </div>
    </div>
  );
};
