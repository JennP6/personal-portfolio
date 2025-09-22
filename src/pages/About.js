/* File: About.js
 * Student Name: Jennifer Peart
 * StudentID: 821385531
 * Due Date: September 26, 2025 */
 
/* Importing necessary libraries and components */

import React from "react";
import profile from "../assets/face.png";
import { FaInstagram, FaFacebook } from "react-icons/fa"; 

/* About component definition */

export default function About() {

  /* JSX for the About page */

  return (
    <section className="about-page">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profile} alt="Jennifer Peart" className="profile-pic" />
        <div className="about-text">
          <h3>Jennifer Peart</h3>
          <p className="tagline"><strong>Aspiring Software Engineer | Realtor | Lifelong Learner</strong></p>
          <p>
            I’m a Realtor and Software Engineering Technology student, proud mom of four boys and two rambunctious puppies 🐶🐶. With a Master’s Degree in Sociology focused on Socio-Legal Studies, I’m passionate about social justice and justice reform. I actively serve in ministry, especially in prayer and prison outreach. I also love building clean, fun web apps.
          </p>
          <p><strong>Skills:</strong> Web Development (HTML, CSS, React, Node.js), Problem Solving, Communication</p>

          {/* Download Buttons and Social Media Links */}

          <div className="about-buttons">
        
            <a
              href="/resume/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Download Resume
            </a>

            <a
              href="/thesis/Thesis.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Download Thesis
            </a>

            <div className="social-links">
              <a
                href="https://www.instagram.com/realtor_jennpeart/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={28} color="#d63384" />
              </a>
              <a
                href="https://www.facebook.com/jenniferpeart.realestate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={28} color="#1877F2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
