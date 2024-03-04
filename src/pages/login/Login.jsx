import React from 'react';
import { Link } from "react-router-dom";
import './LoginPage.css';

function LoginPage() {
  const handleRegisterClick = () => {
    // Navigate to the registration page
    // You can use a routing library like `react-router` to handle navigation
  };

  return (
    <div className="container">
      <div className="welcome-text">Welcome</div>
      <form className="login-form">
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <button type="submit" className="login-button">
          LOGIN
        </button>
        <Link to="/register" className="register-button">
          Register
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;