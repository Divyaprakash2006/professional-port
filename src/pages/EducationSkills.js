import React from "react";
import resume from "../data/resume";

function EducationSkills() {
  return (
    <div className="container">
      <section className="education-skills-section">
        <h2>Education & Skills</h2>

      <div className="education-grid" style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
        {resume.education.map((edu, i) => (
          <div key={i} className="card education-card">
            <div className="education-header">
              <strong>{edu.degree}</strong>
              <span className="duration">{edu.duration}</span>
            </div>
            <div className="education-details">
              {edu.institute}
              {edu.score ? ` · ${edu.score}` : ""}
            </div>
          </div>
        ))}
      </div>

      <h3>Skills</h3>
      <div className="grid">
        {Object.entries(resume.skills).map(([group, items], idx) => (
          <div key={idx} className="card skills-card">
            <h4>{group.replace(/([A-Z])/g, " $1")}</h4>
            <div className="skills">
              {items.map((s, j) => (
                <span key={j} className="skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default EducationSkills;
