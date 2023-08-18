import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';

import '../styles/RegisterPage.css'; // same style as for Loginpage
import { useAuth } from '../hooks/useAuth';

export const RegisterPage = () => {

    const {addUser, login} = useAuth()
    const [confirmPassword, setConfirmPassword] = useState("")
    const [user, setUser] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        contactNumber: "",
        nric: "",
        dateOfBirth: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (confirmPassword === user.password) {
            addUser(user).then((created) => {
                if (created) {
                    login(user)
                } else {
                    alert("User exists")
                }
            })
        } else {
            alert("passwords do not match")
        }
    }

    const handleEmailChange = (e) => {
        setUser({...user, email: e.target.value})
    }
    const handleFirstNameChange = (e) => {
        setUser({...user, firstName: e.target.value})
    }
    const handleLastChange = (e) => {
        setUser({...user, lastName: e.target.value})
    }
    const handlePasswordChange = (e) => {
        setUser({...user, password: e.target.value})
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleAddressChange = (e) => {
        setUser({...user, address: e.target.value})
    }
    const handleContactNumberChange = (e) => {
        setUser({...user, contactNumber: e.target.value})
    }
    const handleNricChange = (e) => {
        setUser({...user, nric: e.target.value})
    }
    const handleDateOfBirthChange = (e) => {
        setUser({...user, dateOfBirth: e.target.value})
    }
    
    return (
        <div className="app">
            <div className="login-form">
                <h1>Reset Password</h1>

                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={user.email} id="email" onChange={handleEmailChange}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={user.password} onChange={handlePasswordChange} id="password"></input>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" value={user.confirmPassword} onChange={handleConfirmPasswordChange} id="confirmPassword"></input>
                    </div>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" value={user.firstName} onChange={handleFirstNameChange} id="firstName"></input>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" value={user.lastName} onChange={handleLastChange} id="lastName"></input>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" value={user.address} onChange={handleAddressChange} id="address"></input>
                    </div>
                    <div>
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input type="text" value={user.contactNumber} onChange={handleContactNumberChange} id="contactNumber"></input>
                    </div>
                    <div>
                        <label htmlFor="nric">NRIC</label>
                        <input type="text" value={user.nric} onChange={handleNricChange} id="nric"></input>
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input type="date" value={user.dateOfBirth} onChange={handleDateOfBirthChange} id="dateOfBirth"></input>
                    </div>

                    <RouterLink to="/">
                        <button className='secondary'>Back</button>
                    </RouterLink>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
};