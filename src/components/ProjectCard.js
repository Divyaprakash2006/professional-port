import React from "react";

function ProjectCard({ title, description, link, tags = [] }) {
  return (
    <div className="card project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {tags.length > 0 && (
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="skill">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
