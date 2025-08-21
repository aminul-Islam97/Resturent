import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from './logo.png'
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
    <div className="logo">
  <img src={Logo} alt="Logo" />
</div>


      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/landing">Landing</NavLink>
        </li>
        <li>
          <NavLink to="/pages">Pages</NavLink>
        </li>
      </ul>
      <div className="icons">
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <FaShoppingCart className="icon" />
      </div>
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
