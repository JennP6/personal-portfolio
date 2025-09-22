/* File: Navbar.js
 * Student Name: Jennifer Peart
 * StudentID: 821385531
 * Due Date: September 26, 2025 */

/* Importing necessary libraries and components */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import "./Navbar.css";

/* Navbar component definition */

export default function Navbar() {
 
 /* JSX for the Navbar */

 return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="site-title">Jennifer Peart</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
