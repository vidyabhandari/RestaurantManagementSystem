import React from "react";
import { Link } from "react-router-dom";
// import "../styles/signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form>
          <div className="input">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Full Name" required />
          </div>
          <div className="input">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="input">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="login-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
