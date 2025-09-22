/* File: Projects.js
 * Student Name: Jennifer Peart
 * StudentID: 821385531
 * Due Date: September 26, 2025 */

/* Importing necessary libraries and components */

import React from "react";
import p1 from "../assets/CustomizedStyle.png";
import p2 from "../assets/MealPlanning.png";
import p3 from "../assets/EventRegistration.png";

/* ProjectCard */

function ProjectCard({ img, title, desc, tech }) {
  return (
    <div className="project-card">
      <img src={img} alt={title} className="project-img" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <p className="tech-stack"><strong>Tech Used:</strong> {tech}</p>
    </div>
  );
}

/* Projects component definition */

export default function Projects() {
  
/* JSX for the Projects page */
  
  return (
    <section className="projects-page">
      <h2>Highlighted Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          img={p1}
          title="Customized Style"
          desc="A web page for purchasing customized merchandise - built as a school assignment."
          tech="HTML, CSS, JavaScript"
        />
        <ProjectCard
          img={p2}
          title="Meal Planning App"
          desc="An interactive app to create weekly menu options, featuring drag-and-drop functionality - built as a school assignment."
          tech="HTML, CSS, JavaScript"
        />
        <ProjectCard
          img={p3}
          title="Event Registration"
          desc="A website to register attendees for an event, built with a clean, user-friendly form layout - built as a school assignment."
          tech="HTML, CSS, JavaScript"
        />
      </div>
    </section>
  );
}
