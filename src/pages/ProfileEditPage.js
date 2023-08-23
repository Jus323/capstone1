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
    dateOfBirth: "",
  });

  // input check
  function requirement_check() {
    // adult for registration
    // TODO: validity of birthday is age 18 years
    if (user.dateOfBirth !== "" && !user.dateOfBirth) {
      alert("Birthday: Please enter a valid birthday!");
      return false;
    } else if (user.dateOfBirth) {
      const currentDate = new Date();
      const birthday = new Date(user.dateOfBirth);
      var timsedifference =
        (currentDate - birthday) / (1000 * 60 * 60 * 24 * 365);
      console.log("this is timediff", timsedifference);
      if (timsedifference < 18) {
        alert("No kids, this is an adult webpage!");
        return false;
      }
    }

    //first name
    if (user.firstName !== "") {
      if (!user.firstName.match(/^[A-Za-z]+$/)) {
        alert("First name: Numbers and special characters are not allowed");
        return false;
      }
    }

    //last name
    if (user.lastName !== "") {
      if (!user.lastName.match(/^[A-Za-z]+$/)) {
        alert("Last name: Numbers and special characters are not allowed");
        return false;
      }
    }

    //phone number
    if (user.contactNumber !== "") {
      if (!user.contactNumber.match(/^[0-9]+$/)) {
        alert("Contact number: Only numbers are allowed");
        return false;
      }
    }
    return true;
  }

  const navigate = useNavigate();

  const handleupdateclick = (e) => {
    e.preventDefault();

    if (requirement_check()) {
      editProfile(user).then((success) => {
        if (success) {
          navigate("/home");
        } else {
          alert("Please check your inputs! :(");
        }
      });
    }
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
              type="date"
              value={user.dateOfBirth}
              onChange={handleDateOfBirthChange}
              id="dateOfBirth"
            ></input>
          </div>

          <button type="submit">Update</button>
          <button type="button" onClick={handlecancelclick}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
