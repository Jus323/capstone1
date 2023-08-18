import React from 'react';
import '../styles/LoginPage.css'; // same style as for Loginpage
import { useNavigate } from "react-router-dom";

export const ProfileEditPage = () => {

    const navigate = useNavigate()

    const handleupdateclick = () => {navigate("/home")}
    const handlecancleclick = () => {navigate("/register")}

    return(
        <div className="app">
        <div className="login-form">
            <h1>Manage Your Profile</h1>

            <form action=''>
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
                <label for="contact_number">Contact Number</label>
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

            <button onClick={handleupdateclick}>Update</button>
            <button onClick={handlecancleclick}>Cancle</button>
        </form>
        </div>
    </div>)
};
