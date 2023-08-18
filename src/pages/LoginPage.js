import React, {useState} from 'react';
import {useAuth} from "../hooks/useAuth"
import { Link as RouterLink } from 'react-router-dom';
import '../styles/LoginPage.css';

export const LoginPage = () => {

  const { login } = useAuth()
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const handleEmailChange = (e) => {
    setCredentials({...credentials, email: e.target.value})
  }
  const handlePasswordChange = (e) => {
      setCredentials({...credentials, password: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(credentials).then((success) => {
      if (!success) {
        alert("Incorrect credentials")
      }
    })
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>LOGIN</h1>
        <input type="email" id="email" value={credentials.email} onChange={handleEmailChange} placeholder="Email"></input>
        <input type="password" id="password" value={credentials.password} onChange={handlePasswordChange} placeholder="Password"></input>
        <button type='submit'>Login</button>

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
      </form>
    </div>
  )
}