import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/loginsignup/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        setErrorMessage(data.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
    setIsLoading(false);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
