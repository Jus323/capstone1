import React from 'react'
import '../styles/LoginPage.css'
import { Link as RouterLink } from 'react-router-dom'

export const LoginPage = () => 
  <div className="app">
    <div className="login-form">
      <h1>LOGIN</h1>
      <input type="text" id="email" placeholder="Email"></input>
      <input type="text" id="pwd" placeholder="Password"></input>
      <button>Login</button>

      <p className="message">
        Not registered? &nbsp;
        <RouterLink to="/register">
          Create an account
        </RouterLink>
      </p>
      <p className="message">
        Forgot password? &nbsp;
        <RouterLink to="/register">
          Click here
        </RouterLink>
      </p>
    </div>
  </div>
;