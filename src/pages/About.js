import React from "react";
import resume from "../data/resume";

function About() {
  return (
    <div className="container">
      <section className="about-section">
        <h2>About Me</h2>
        <div className="card">
          <p>{resume.summary}</p>
        </div>
      </section>
    </div>
  );
}

export default About;
