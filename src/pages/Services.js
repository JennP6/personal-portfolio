/* File: Services.js
 * Student Name: Jennifer Peart
 * StudentID: 821385531
 * Due Date: September 26, 2025 */

/* Importing necessary libraries and components */

import React from "react";
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaPalette, FaSearch, FaBug, FaChartLine, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

/* Services component definition */

export default function Services() {
  
  /* JSX for the Services page */

  return (
    <section className="services-page">
      <h2>Services I Offer</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="icon-wrapper">
            <FaLaptopCode size={36} color="#fff" />
          </div>
          <h3>Front-End Development</h3>
          <p>Creating responsive, visually appealing websites with HTML, CSS, and JavaScript.</p>
          <Link to="/contact"><button className="primary-btn">Contact Me</button></Link>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <FaDatabase size={36} color="#fff" />
          </div>
          <h3>Back-End Development</h3>
          <p>Building server-side functionality using Node.js and Oracle SQL databases.</p>
          <Link to="/contact"><button className="primary-btn">Contact Me</button></Link>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <FaMobileAlt size={36} color="#fff" />
          </div>
          <h3>Mobile-Responsive Design</h3>
          <p>Ensuring websites look great on all devices.</p>
          <Link to="/contact"><button className="primary-btn">Contact Me</button></Link>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <FaPalette size={36} color="#fff" />
          </div>
          <h3>UI / UX Design</h3>
          <p>Designing clean interfaces and user-friendly layouts for all applications.</p>
          <Link to="/contact"><button className="primary-btn">Contact Me</button></Link>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <FaSearch size={36} color="#fff" />
          </div>
          <h3>SEO & Performance</h3>
          <p>Optimizing websites for speed and search visibility to attract more users.</p>
          <Link to="/contact"><button className="primary-btn">Contact Me</button></Link>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <FaBug size={36} color="#fff" />
          </div>
          <h3>Accessibility & Testing</h3>
          <p>Making websites accessible to everyone and ensuring optimal performance through testing.</p>
          <Link to="/contact"><button className="primary-btn">Contact Me</button></Link>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <FaChartLine size={36} color="#fff" />
          </div>
          <h3>Analytics & Reporting</h3>
          <p>Tracking user engagement and providing actionable insights for web apps and sites.</p>
          <Link to="/contact"><button className="primary-btn">Contact Me</button></Link>
        </div>
        <div className="service-card">
          <div className="icon-wrapper">
            <FaHome size={36} color="#fff" />
          </div>
          <h3>Real Estate Support</h3>
          <p>Creating listings, websites, and online tools tailored for realtors and property marketing.</p>
          <Link to="/contact"><button className="primary-btn">Contact Me</button></Link>
        </div>
      </div>
    </section>
  );
}
