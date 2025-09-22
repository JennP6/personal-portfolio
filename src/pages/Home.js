/* File: Home.js
 * Student Name: Jennifer Peart
 * StudentID: 821385531
 * Due Date: September 26, 2025 */

/* Importing necessary libraries and components */

import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa"; 

/* Home component definition */

export default function Home() {
 
  /* JSX for the Home page */ 

  return (
    <section className="home-page">
      <div className="hero">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>

        <h1>
          Welcome — I'm Jennifer Peart! <FaLaptopCode className="hero-icon" />
        </h1>
        <p className="tagline">
          Software Engineering Technology Student & Aspiring Web Developer
        </p>
        <p className="mission">
          Mission Statement: Turning coffee and code into web magic — crafting apps that are clean and fun.
        </p>
        <Link to="/about">
          <button className="primary-btn">Learn More About Me</button>
        </Link>
      </div>
    </section>
  );
}
