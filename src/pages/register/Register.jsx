import React from 'react';
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="registration-container">
      <h1 className="registration-text">Registration</h1>
      <form className="registration-form">
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Username" />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <Link to="/login" className="back-to-login-button">
        Back to Login
      </Link>
    </div>
  );
}

export default Register;