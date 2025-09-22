/* File: Contact.js
 * Student Name: Jennifer Peart
 * StudentID: 821385531
 * Due Date: September 26, 2025 */

/* Importing necessary libraries and components */

import React, { useState } from "react";           
import { FaInstagram, FaFacebook } from "react-icons/fa";  
import { useNavigate } from "react-router-dom"; 

/* Contact component definition */

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  /* Handle form input changes */

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("lastContact", JSON.stringify(form));
    setSubmitted(true);
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setTimeout(() => {
      navigate("/");
  }
    , 1500);
  }

/* JSX for the Contact page */

  return (
    <section className="contact-page">
      <div className="contact-section">
        <h2>Contact Me</h2>
        <h3 className="contact-headline">
          Projects brewing? Ideas planned? Let’s connect!
        </h3>

        <div className="contact-wrapper">

            {/* Contact Form */}

            <form onSubmit={handleSubmit} className="contact-form">
              <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                placeholder="Contact Number"
                value={form.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message</button>
              {submitted && <p className="success-msg">Message sent successfully!</p>}
            </form>

            {/* Contact Info, Social Media Links, & Map */}

            <div className="contact-extra">
              <div className="contact-info-panel">
               <h3>Contact Information</h3>
                <p><strong>Email:</strong> jennifer@jenniferpeart.ca</p>
                <p><strong>Phone:</strong> (647) 294-5572</p>
                <p><strong>Address:</strong> 1238 Queen St E, Toronto, ON</p>
              </div>
              <div>
                <p>Follow me on social media:</p>
                <div className="social-links">
                  <a
                    href="https://www.instagram.com/realtor_jennpeart/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={28} color="#d63384" />
                  </a>
                  <a
                    href="https://www.facebook.com/jenniferpeart.realestate"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={28} color="#1877F2" />
                  </a>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  title="Toronto Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.501856918409!2d-79.3661806844987!3d43.65522697912185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b6d1f1c2a7%3A0x123456789abcdef!2s1238%20Queen%20St%20E%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1694500000000!5m2!1sen!2sca"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}
