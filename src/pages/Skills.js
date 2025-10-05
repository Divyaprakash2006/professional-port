import React from "react";
import resume from "../data/resume";
import toolPlaceholder from "./image.png";

function Skills() {
  const groups = [
    { title: "Languages", items: resume.skills.languages },
    { title: "Frameworks", items: resume.skills.frameworks },
    { title: "Databases", items: resume.skills.databases },
    { title: "Cloud", items: resume.skills.cloud },
    { title: "Tools", items: resume.skills.tools },
    { title: "Data Analytics", items: resume.skills.analytics },
  ];
  return (
    <section className="skills-section">
      <div className="container">
        <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>Skills</h2>
        <div className="grid">
          {groups.map((g, i) => (
            <div key={i} className="card">
              <h3 style={{ marginTop: 0 }}>{g.title}</h3>
              <div
                className={`skills${g.title === "Tools" ? " tools-grid" : ""}`}
              >
                {g.items.map((s, j) => {
                  if (g.title === "Tools") {
                    const iconSrc = toolPlaceholder; // placeholder, replace with actual tool icon paths if available
                    return (
                      <span key={j} className="skill skill-with-icon">
                        <img src={iconSrc} alt="" aria-hidden="true" />
                        <span>{s}</span>
                      </span>
                    );
                  }
                  return (
                    <span key={j} className="skill">
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
