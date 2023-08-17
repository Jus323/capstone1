import React from 'react'
import '../styles/LoginPage.css' // same style as for Loginpage
// import { Link as RouterLink } from 'react-router-dom'

export const ForgotPasswordPage = () => (
  <div className="app">
    <div className="login-form">
      <h1>Reset Password</h1>

      <form action='\'> 
        <div>
            <label for="email">Email  </label> 
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <span class="material-symbols-outlined">mail</span>
            <input type="email" id="email" placeholder="Email"></input>
        </div>
        <div>
            <label for="new_pwd">New Password  </label>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <span class="material-symbols-outlined">pets</span>
            <input type="password" id="new_pwd" placeholder="New Password"></input>
        </div>

        <input type='submit' class="submit_type" value="Reset"></input>
      </form>
    </div>
  </div>
);