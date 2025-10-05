import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside style={{ width: "200px", background: "#f4f4f4", padding: "1rem" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
