import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import resume from "../data/resume";

function Header() {
  const [open, setOpen] = useState(false);
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
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
        <nav
          className={`nav-links ${open ? "open" : ""}`}
          onClick={() => setOpen(false)}
        >
          <NavLink
            end
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/education"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Education & Skills
          </NavLink>
          <NavLink
            to="/certifications"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Certifications
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
