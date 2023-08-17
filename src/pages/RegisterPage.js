import React from 'react'
import '../styles/LoginPage.css' // same style as for Loginpage

export const RegisterPage = () => (
  <div className="app">
    <div className="login-form">
      <h1>Reset Password</h1>

      <form action='\'> 
        <div>
            <label for="email">Email</label>
            <input type="email" id="email"></input>
        </div>
        <div>
            <label for="pwd">Password</label>
            <input type="password" id="pwd"></input>
        </div>
        <div>
            <label for="confirm_pwd">Confirm Password</label>
            <input type="password" id="confirm_pwd"></input>
        </div>
        <div>
            <label for="first_name">First Name</label>
            <input type="text" id="first_name"></input>
        </div>
        <div>
        <label for="last_name">Last Name</label>
            <input type="text" id="last_name"></input>
        </div>
        <div>
            <label for="address">Address</label>
            <input type="text" id="address"></input>
        </div>
        <div>
            <label for="contact_number">contact Number</label>
            <input type="text" id="contact_number"></input>
        </div>
        <div>
            <label for="nric">NRIC</label>
            <input type="text" id="nric"></input>
        </div>
        <div>
            <label for="birthday">Date of Birth</label>
            <input type="date" id="birthday"></input>
        </div>

        <input type='submit' class="submit_type" value="Register"></input>
      </form>
    </div>
  </div>
);