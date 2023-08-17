import React from 'react'
import '../styles/LoginPage.css'

export const LoginPage = () => (
    <div className='app'>
      <div className='login-form'>
            <h1>LOGIN</h1>
            <input type='text' id='email' placeholder='Email'></input>
            <input type='text' id='pwd' placeholder='Password'></input>
            <button>Login</button>
            <p class="message">Not registered? <a href="">Create an account</a></p>
            <p class="message">Forgot password? <a href="">Click here</a></p>
      </div>
    </div>
  );