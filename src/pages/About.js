import React from "react";
import resume from "../data/resume";

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
        {resume.summary}
      </p>
    </section>
  );
}

export default About;
