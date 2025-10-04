import React from 'react';
import resume from '../data/resume';

function Education() {
  return (
    <section>
      <h2 style={{ marginBottom: '1rem' }}>Education</h2>
      {resume.education.map((edu, i) => (
        <div key={i} className="card" style={{ display: 'grid', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
            <strong>{edu.degree}</strong>
            <span style={{ color: 'var(--muted)' }}>{edu.duration}</span>
          </div>
          <div style={{ color: 'var(--muted)' }}>{edu.institute}{edu.score ? ` · ${edu.score}` : ''}</div>
        </div>
      ))}
    </section>
  );
}

export default Education;

