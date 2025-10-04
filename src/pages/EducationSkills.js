import React from 'react';
import resume from '../data/resume';

function EducationSkills() {
  return (
    <section>
      <h2 style={{ marginBottom: '1rem' }}>Education & Skills</h2>

      <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
        {resume.education.map((edu, i) => (
          <div key={i} className="card" style={{ display: 'grid', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
              <strong>{edu.degree}</strong>
              <span style={{ color: 'var(--muted)' }}>{edu.duration}</span>
            </div>
            <div style={{ color: 'var(--muted)' }}>{edu.institute}{edu.score ? ` · ${edu.score}` : ''}</div>
          </div>
        ))}
      </div>

      <h3 style={{ marginBottom: '0.5rem' }}>Skills</h3>
      <div className="grid">
        {Object.entries(resume.skills).map(([group, items], idx) => (
          <div key={idx} className="card">
            <h4 style={{ marginTop: 0, textTransform: 'capitalize' }}>{group.replace(/([A-Z])/g, ' $1')}</h4>
            <div className="skills">
              {items.map((s, j) => (
                <span key={j} className="skill">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSkills;
