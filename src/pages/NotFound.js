import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section>
      <h2>Page not found</h2>
      <p className="hero-subtitle">The page you’re looking for doesn’t exist.</p>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/" className="btn">Go Home</Link>
      </div>
    </section>
  );
}

export default NotFound;

