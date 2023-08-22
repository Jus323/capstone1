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

  // input check
  function requirement_check() {
    // invalid nric check
    if (user.nric.length < 4) {
      alert("Please enter a valid NRIC number!");
      return false;
    }
    // adult for registration
    if (!user.dateOfBirth) {
      alert("Please enter a valid birthday!");
      return false;
    }

    //first name
    if (user.firstName !== "") {
      if (!user.firstName.match(/^[A-Za-z]+$/)) {
        alert("Numbers and special characters are not allowed");
        return false;
      }
    }

    //last name
    if (user.firstName !== "") {
      if (!user.lastName.match(/^[A-Za-z]+$/)) {
        alert("Numbers and special characters are not allowed");
        return false;
      }
    }

    //phone number
    if (user.firstName !== "") {
      if (!user.contactNumber.match(/^[0-9]+$/)) {
        alert("Only numbers are allowed");
        return false;
      }
    }
  }

  const navigate = useNavigate();

  const handleupdateclick = (e) => {
    e.preventDefault();

    if (requirement_check()) {
    editProfile(user).then((success) => {
      if (!success) {
        alert("Please check your inputs! :(");
      }
    })};

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
            <input
              type="text"
              value={user.firstName}
              onChange={handleFirstNameChange}
              id="firstName"
              placeholder="First name (Optional)"

            ></input>
          </div>
          <div>
            <input
              type="text"
              value={user.lastName}
              onChange={handleLastNameChange}
              id="lastName"
              placeholder="Last name (Optional)"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={user.address}
              onChange={handleAddressChange}
              id="address"
              placeholder="Address (Optional)"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={user.contactNumber}
              onChange={handleContactNumberChange}
              id="contactNumber"
              placeholder="Contact Number (Optional)"
            ></input>
          </div>
          <div>
            <input
              type="text"
              value={user.nric}
              onChange={handleNricChange}
              id="nric"
              placeholder="NRIC* (at least 4 digit)"
            ></input>
          </div>
          <div>
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
