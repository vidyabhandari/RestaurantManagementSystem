import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
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
          <div>
            <button className="login-button">Login</button>
          </div>
          <div className="extra-links">
            <a href="/forgot-password">
              Forgot <span>Password?</span>
            </a>
            <p>
              Don't have an account?{" "}
              <a href="/signup">
                <span>Sign up</span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
