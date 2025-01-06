import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import profile from "../Images/profile.jpeg";
import homepage from "../Images/homepage.jpg";
import "../styles/homepage.css";
import "../styles/menu.css";

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
              <HashLink smooth to="/menu/menu">
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
        <div className="about-us">
          <h1>About Us</h1>
          <section className="introduction">
            <h2>Welcome to Flavors Unleashed</h2>
            <p>
              At Flavors Unleashed, we specialize in authentic Italian cuisine
              with a modern twist, using the freshest ingredients to bring you
              an unforgettable dining experience.
            </p>
          </section>
          <section className="our-story">
            <h2>Our Story</h2>
            <p>
              Founded in 2015, Flavors Unleashed began with a dream to share the
              timeless flavors of Italy with our community. What started as a
              small family-owned eatery has grown into a beloved dining
              destination.
            </p>
          </section>
          <section className="values">
            <h2>Our Vision & Values</h2>
            <p>
              Our vision is to create a space where food brings people together
              to create lasting memories. We prioritize quality, authenticity,
              and sustainability in every dish.
            </p>
          </section>
          <section className="team">
            <h2>Meet Our Team</h2>
            <p>
              Chef Maria leads our kitchen, bringing over 20 years of culinary
              expertise and a passion for Mediterranean flavors to every dish.
            </p>
          </section>
          <section className="cta">
            <h2>Experience the Difference</h2>
            <p>
              Visit us today or explore our menu online to start your journey!
            </p>
          </section>
        </div>
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
