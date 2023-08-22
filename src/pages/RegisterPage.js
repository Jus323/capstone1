import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterPage.css"; // same style as for Loginpage
import { useAuth } from "../hooks/useAuth";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { addUser } = useAuth();
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

  const [pwd_strength, setStrength] = useState("");
  const [strength_colorid, setStrengthcolorid] = useState("");

  const checkPasswordStrength = (password) => {
    // Define your criteria for password strength here
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

    let score = 0;

    if (lowercaseRegex.test(password)) {
      score++;
    }
    if (uppercaseRegex.test(password)) {
      score++;
    }
    if (digitRegex.test(password)) {
      score++;
    }
    if (specialCharRegex.test(password)) {
      score++;
    }

    if (password.length >= 8 && score >= 3) {
      setStrength("Strong");
      setStrengthcolorid("strong_id");
    } else if (password.length >= 6 && score >= 2) {
      setStrength("Moderate");
      setStrengthcolorid("moderate_id");
    } else {
      setStrength("Weak");
      setStrengthcolorid("weak_id");
    }
  };

  // input check
  function requirement_check() {
    // password
    if (confirmPassword !== user.password) {
      alert("Passwords do not match!");
      return false;
    }
    if (user.password.length <= 4) {
      alert("Password too short!");
      return false;
    }
    if (
      !user.password.match(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d@$#!%*?&]{8,}$/
      )
    ) {
      alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long "
      );
      return false;
    }

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

    const currentDate = new Date();
    const birthday = new Date(user.dateOfBirth);
    var timsedifference =
      (currentDate - birthday) / (1000 * 60 * 60 * 24 * 365);
    console.log("this is timediff", timsedifference);
    if (timsedifference < 18) {
      alert("No kids, this is an adult webpage!");
      return false;
    }

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (requirement_check()) {
      addUser(user).then((created) => {
        if (created) {
          alert("User created!");
          navigate("/");
        } else {
          alert("User NRIC exists");
        }
      });
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
    checkPasswordStrength(user.password);
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
        <h4>*: Required Fields</h4>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              value={user.email}
              id="email"
              onChange={handleEmailChange}
              placeholder="Email*"
              required
            ></input>
          </div>
          <div>
            <h5>
              Strength Check:{" "}
              <span className={strength_colorid}>{pwd_strength}</span>
            </h5>

            <input
              type="password"
              value={user.password}
              onChange={handlePasswordChange}
              id="password"
              placeholder="Password*"
              required
            ></input>
            <tag>
              <div
                style={{ fontSize: "10px", color: "red", textAlign: "left" }}
              >
                * Password must contain at least one lowercase letter, one
                uppercase letter, one digit, one special character, and be at
                least 8 characters long
              </div>
            </tag>
          </div>
          <div>
            <input
              type="password"
              value={user.confirmPassword}
              onChange={handleConfirmPasswordChange}
              id="confirmPassword"
              placeholder="Confirm Password*"
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
              placeholder="NRIC* (at least 4 digit)"
            ></input>
          </div>
          <div>
            <input
              placeholder="Date of Birth* (More than 18 year-old)"
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
