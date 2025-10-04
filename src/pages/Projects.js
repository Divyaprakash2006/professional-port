import React from 'react';
import ProjectCard from '../components/ProjectCard';
import resume from '../data/resume';

function Projects() {
  return (
    <section className="projects-hero">
      <div className="container" style={{ padding: '4rem 0' }}>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Projects</h2>
        <div className="grid">
        {resume.projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
