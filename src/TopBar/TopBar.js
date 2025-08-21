import React from "react";
import "./TopBar.css";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span>Currency: USD ▼</span>
      </div>

      <div className="topbar-center">
        <span>WELCOME TO OUR RESTAURANT</span>
      </div>

      <div className="topbar-right">
        <a href="#"><FaUser /> My Account</a>
        <a href="#">Contact Us</a>
        <a href="#"><FaMapMarkerAlt /> Our Location</a>
        <a href="#">🌐 EN</a>
      </div>
    </div>
  );
};

export default TopBar;
