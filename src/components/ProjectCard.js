import React from "react";

function ProjectCard({ title, description, link, tags = [] }) {
  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ color: "var(--muted)" }}>{description}</p>
      {tags.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            margin: "0.5rem 0",
          }}
        >
          {tags.map((tag, i) => (
            <span
              key={i}
              className="skill"
              style={{ padding: "0.3rem 0.5rem" }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {/* link intentionally omitted to remove external control */}
    </div>
  );
}

export default ProjectCard;
