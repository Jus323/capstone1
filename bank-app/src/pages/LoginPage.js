import React from 'react'
import '../styles/LoginPage.css'
import { Link as RouterLink } from 'react-router-dom'

export const LoginPage = () => (
  <div className="app">
    <div className="login-form">
      <h1>LOGIN</h1>
      <input type="text" id="email" placeholder="Email"></input>
      <input type="text" id="pwd" placeholder="Password"></input>
      <button>Login</button>

      <p class="message">
        Not registered?
        <RouterLink to="/register">
          <a href="#"> Create an account</a>
        </RouterLink>
      </p>
      <p class="message">
        Forgot password?
        <RouterLink to="/register">
          <a href="#"> Click here</a>
        </RouterLink>
      </p>
    </div>
  </div>
);