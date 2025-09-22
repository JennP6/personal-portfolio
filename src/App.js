/* File: App.js
 * Student Name: Jennifer Peart
 * StudentID: 821385531
 * Due Date: September 26, 2025 */

/* Importing necessary libraries and components */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css";

/* App component definition */

export default function App() {
 
  /* JSX for the App */

  return (
    <div className="App">

    {/* Navbar */}

      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
 
      <footer className="footer">
        © Jennifer Peart 821385531 COMP229 FALL 2025
      </footer>
    </div>
  );
}
