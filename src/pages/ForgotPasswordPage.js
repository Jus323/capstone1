import React, { useState } from "react";
import "../styles/ForgotPasswordPage.css";
import { useAuth } from "../hooks/useAuth";

export const ForgotPasswordPage = () => {
  const { resetPassword } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setCredentials({ ...credentials, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setCredentials({ ...credentials, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(credentials).then((success) => {
      if (!success) {
        alert("User does not exist");
      }
    });
  };

  return (
    <div className="app">
      <div className="login-form">
        <h1>Reset Password</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            value={credentials.email}
            onChange={handleEmailChange}
            placeholder="Email"
          ></input>
          <input
            type="password"
            id="password"
            value={credentials.password}
            onChange={handlePasswordChange}
            placeholder="Password"
          ></input>
          <button type="submit">Reset</button>
        </form>
      </div>
    </div>
  );
};
