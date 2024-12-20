import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import profile from "../Images/profile.jpeg";
import homepage from "../Images/homepage.jpg";
import "../styles/homepage.css";

export default function Homepage() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">"Home feels!🏠♡"</div>
          <ul className="nav-links">
            <li>
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/menu">
                Menu
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/contact">
                Contact
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/login">
                Login
              </HashLink>
            </li>
          </ul>

          <div className="profile">
            <img
              src={profile} // Replace with your profile image URL
              alt="Profile"
              className="profile-logo"
            />
            {/* <button onClick={handleLoginLogout} className="login-btn">
              {isLoggedIn ? "Logout" : "Login"}
            </button> */}
          </div>
        </nav>
      </header>

      <section id="home" className="hero">
        <img src={homepage} alt="Delicious food with cozy ambiance" />
        <div className="hero-text">
          <h1>Welcome to Home Feels!</h1>
          <p>"Where flavors tell stories and every meal feels like home."</p>
        </div>
      </section>

      <section id="about" className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to Restaurant Name, where we serve the finest cuisine made
          with love and passion. Our focus is on delivering an exceptional
          dining experience in a cozy and friendly atmosphere. Come visit us and
          let us make your meal special!
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Home Feels!. All Right Reserved.</p>
        <p>
          Follow us on:{" "}
          <a href="#" target="_blank">
            Instagram
          </a>{" "}
          |{" "}
          <a href="#" target="_blank">
            Facebook
          </a>
        </p>
      </footer>
    </div>
  );
}
