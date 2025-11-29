import React from "react";
import ProjectCard from "../components/ProjectCard";
import resume from "../data/resume";

function Projects() {
  return (
    <div className="container">
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="grid">
          {resume.projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
