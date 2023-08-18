import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/LoginPage.css';

export const LoginPage = () =>
  <div className="app">
    <div className="login-form">
      <h1>LOGIN</h1>
      <input type="email" id="email" placeholder="Email"></input>
      <input type="password" id="pwd" placeholder="Password"></input>
      <button>Login</button>

      <p className="message">
        Not registered? &nbsp;
        <RouterLink to="/register">
          Create an account
        </RouterLink>
      </p>
      <p className="message">
        Forgot password? &nbsp;
        <RouterLink to="/forgotpassword">
          Click here
        </RouterLink>
      </p>
    </div>
  </div>
;