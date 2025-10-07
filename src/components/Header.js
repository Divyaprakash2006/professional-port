import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import resume from "../data/resume";

function Header() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const toggleMenu = () => {
    if (open) {
      setClosing(true);
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 300); // Match animation duration
    } else {
      setOpen(true);
    }
  };

  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">
          <div className="brand-avatar">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ width: "18px", height: "18px" }}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </div>
          <span className="brand-name">{resume.name}</span>
        </div>

        <button
          className={`nav-toggle ${open ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav
          className={`nav-links ${open ? "open" : ""} ${closing ? "closing" : ""}`}
          onClick={toggleMenu}
        >
          {/* Dynamic Technology Objects in Sidebar */}
          <div className="sidebar-tech-objects">
            <div className="sidebar-tech-object sidebar-tech-object-1">
              <div className="sidebar-tech-glow"></div>
              <span className="sidebar-tech-symbol"></span>
            </div>
            <div className="sidebar-tech-object sidebar-tech-object-2">
              <div className="sidebar-tech-glow"></div>
              <span className="sidebar-tech-symbol"></span>
            </div>
          </div>

          <NavLink
            end
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <span className="nav-icon">🏠</span>
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/education"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <span className="nav-icon">📚</span>
            <span>Education & Skills</span>
          </NavLink>
          <NavLink
            to="/certifications"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <span className="nav-icon">🏆</span>
            <span>Certifications</span>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <span className="nav-icon">💼</span>
            <span>Projects</span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <span className="nav-icon">💬</span>
            <span>Contact</span>
          </NavLink>
        </nav>

        {/* Mobile overlay for sidebar */}
        <div
          className={`nav-overlay ${open ? 'active' : ''}`}
          onClick={toggleMenu}
        ></div>
      </div>

      {/* Dynamic Tech Objects - More Technologies */}
      <div className="nav-tech-objects">
        <div className="tech-object tech-object-1"><div className="tech-glow"></div><span className="tech-symbol">⚛️</span></div>
        <div className="tech-object tech-object-2"><div className="tech-glow"></div><span className="tech-symbol">🟨</span></div>
        <div className="tech-object tech-object-3"><div className="tech-glow"></div><span className="tech-symbol">🌐</span></div>
        <div className="tech-object tech-object-4"><div className="tech-glow"></div><span className="tech-symbol">🐍</span></div>
        <div className="tech-object tech-object-5"><div className="tech-glow"></div><span className="tech-symbol">🟦</span></div>
        <div className="tech-object tech-object-6"><div className="tech-glow"></div><span className="tech-symbol">💾</span></div>
        <div className="tech-object tech-object-7"><div className="tech-glow"></div><span className="tech-symbol">🌳</span></div>
        <div className="tech-object tech-object-8"><div className="tech-glow"></div><span className="tech-symbol">🎨</span></div>
        <div className="tech-object tech-object-9"><div className="tech-glow"></div><span className="tech-symbol">🔗</span></div>
        <div className="tech-object tech-object-10"><div className="tech-glow"></div><span className="tech-symbol">🐙</span></div>
      </div>
    </header>
  );
}

export default Header;
