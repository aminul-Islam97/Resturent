import React, { useState } from "react";
import "./Footer.css";

import appstore from "../assets/a.png";
import playstore from "../assets/a1.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    alert(`Thank you for subscribing, ${email}!`);
    console.log("Submitted email:", email);

    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h4>Information</h4>
          <ul>
            <li><a href="#">Gift Vouchers</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Specials Offers</a></li>
          </ul>
        </div>

        <div>
          <h4>Our Policy</h4>
          <ul>
            <li><a href="#">Country available</a></li>
            <li><a href="#">Shipping options</a></li>
            <li><a href="#">Tracking a package</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Cancellation Policy</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Warranty & Services</a></li>
          </ul>
        </div>

        <div>
          <h4>My Account</h4>
          <ul>
            <li><a href="#">Gift Vouchers</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Specials Offers</a></li>
          </ul>
        </div>

        <div className="newsletter">
          <h4>Get Deals From The Store</h4>
          <p>
            Subscribe to receive updates on menu arrivals, special offers and discount information.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">SUBMIT NOW</button>
          </form>
        </div>

        <div className="app-buttons">
          <h4>Download App</h4>
          <img src={appstore} alt="App Store" />
          <img src={playstore} alt="Google Play" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Address: Your Address Information Here, 123, Zip-000 | Mail: 
          <a href="mailto:info@example.com"> info@example.com</a>
        </p>
        <span>
          Copyright © 2025 Your Company. All rights reserved | Designed by 
          <a href="#"> Naimul Sujan</a>.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
