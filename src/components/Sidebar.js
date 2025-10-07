import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { 
  DiJavascript1, 
  DiReact, 
  DiNodejs,
  DiPython,
  DiHtml5,
  DiCss3,
  DiMongodb,
  DiGit,
  DiDatabase
} from "react-icons/di";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

function Sidebar() {
  const location = useLocation();

  return (
    <>
      <style>
        {`
          .sidebar {
            width: 240px;
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.85),
              rgba(0, 0, 0, 0.75)
            ), url('/my-photo.png');
            background-size: cover;
            background-position: center;
            padding: 1.5rem 1rem;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            height: 100vh;
            position: fixed;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
            color: white;
          }

          .nav-list {
            list-style: none;
            padding: 0;
            margin: 1rem 0;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .nav-item {
            border-radius: 14px;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .nav-link {
            display: flex;
            align-items: center;
            padding: 0.8rem 1.2rem;
            text-decoration: none;
            color: rgba(255, 255, 255, 0.8);
            position: relative;
            transition: all 0.3s ease;
            font-weight: 500;
            gap: 12px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(5px);
            margin-bottom: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .nav-link:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateX(4px);
            color: white;
          }

          .nav-link.active {
            background: rgba(var(--primary-rgb), 0.3);
            color: white;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(var(--primary-rgb), 0.5);
          }

          .nav-link.active:hover {
            transform: translateX(4px) scale(1.02);
          }

          .nav-icon {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.8;
          }

          .nav-text {
            font-size: 0.95rem;
          }

          @media (max-width: 768px) {
            .sidebar {
              width: 100%;
              height: auto;
              position: static;
              padding: 1rem;
            }

            .nav-list {
              flex-direction: row;
              justify-content: space-around;
            }

            .nav-item {
              flex: 1;
            }

            .nav-link {
              flex-direction: column;
              align-items: center;
              padding: 0.6rem;
              text-align: center;
              gap: 6px;
            }

            .nav-text {
              font-size: 0.8rem;
            }

            .floating-icons {
              display: none;
            }
          }

          /* Floating Icons Styles */
          .floating-icons {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            overflow: hidden;
            pointer-events: none;
            z-index: 0;
          }

          .float-icon {
            position: absolute;
            font-size: 2.5rem;
            opacity: 0.15;
            filter: blur(1px);
            will-change: transform;
            color: rgba(255, 255, 255, 0.9);
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          }

          .float-icon svg {
            width: 100%;
            height: 100%;
          }

          .js-icon {
            color: #f7df1e;
            animation: float1 20s infinite linear;
          }

          .react-icon {
            color: #61dafb;
            animation: float2 25s infinite linear;
          }

          .node-icon {
            color: #68a063;
            animation: float3 22s infinite linear;
          }

          .python-icon {
            color: #3776ab;
            animation: float4 24s infinite linear;
          }

          .html-icon {
            color: #e34f26;
            animation: float5 23s infinite linear;
          }

          .css-icon {
            color: #1572b6;
            animation: float6 26s infinite linear;
          }

          .typescript-icon {
            color: #3178c6;
            animation: float7 27s infinite linear;
          }

          .tailwind-icon {
            color: #06b6d4;
            animation: float8 25s infinite linear;
          }

          .mongodb-icon {
            color: #47a248;
            animation: float9 28s infinite linear;
          }

          .git-icon {
            color: #f05032;
            animation: float10 29s infinite linear;
          }

          .database-icon {
            color: #336791;
            animation: float11 30s infinite linear;
          }

          @keyframes float1 {
            0% {
              transform: translate(20%, 20%) rotate(0deg);
            }
            33% {
              transform: translate(60%, 60%) rotate(120deg);
            }
            66% {
              transform: translate(20%, 80%) rotate(240deg);
            }
            100% {
              transform: translate(20%, 20%) rotate(360deg);
            }
          }

          @keyframes float2 {
            0% {
              transform: translate(60%, 30%) rotate(0deg);
            }
            33% {
              transform: translate(20%, 70%) rotate(120deg);
            }
            66% {
              transform: translate(70%, 40%) rotate(240deg);
            }
            100% {
              transform: translate(60%, 30%) rotate(360deg);
            }
          }

          @keyframes float3 {
            0% {
              transform: translate(40%, 80%) rotate(0deg);
            }
            33% {
              transform: translate(80%, 30%) rotate(120deg);
            }
            66% {
              transform: translate(30%, 50%) rotate(240deg);
            }
            100% {
              transform: translate(40%, 80%) rotate(360deg);
            }
          }

          @keyframes float4 {
            0% {
              transform: translate(15%, 45%) rotate(0deg);
            }
            33% {
              transform: translate(65%, 25%) rotate(120deg);
            }
            66% {
              transform: translate(35%, 85%) rotate(240deg);
            }
            100% {
              transform: translate(15%, 45%) rotate(360deg);
            }
          }

          @keyframes float5 {
            0% {
              transform: translate(75%, 25%) rotate(0deg);
            }
            33% {
              transform: translate(25%, 65%) rotate(120deg);
            }
            66% {
              transform: translate(55%, 35%) rotate(240deg);
            }
            100% {
              transform: translate(75%, 25%) rotate(360deg);
            }
          }

          @keyframes float6 {
            0% {
              transform: translate(25%, 65%) rotate(0deg);
            }
            33% {
              transform: translate(75%, 35%) rotate(120deg);
            }
            66% {
              transform: translate(45%, 75%) rotate(240deg);
            }
            100% {
              transform: translate(25%, 65%) rotate(360deg);
            }
          }

          @keyframes float7 {
            0% {
              transform: translate(55%, 15%) rotate(0deg);
            }
            33% {
              transform: translate(25%, 85%) rotate(120deg);
            }
            66% {
              transform: translate(85%, 45%) rotate(240deg);
            }
            100% {
              transform: translate(55%, 15%) rotate(360deg);
            }
          }

          @keyframes float8 {
            0% {
              transform: translate(35%, 55%) rotate(0deg);
            }
            33% {
              transform: translate(85%, 25%) rotate(120deg);
            }
            66% {
              transform: translate(15%, 75%) rotate(240deg);
            }
            100% {
              transform: translate(35%, 55%) rotate(360deg);
            }
          }

          @keyframes float9 {
            0% {
              transform: translate(65%, 35%) rotate(0deg);
            }
            33% {
              transform: translate(15%, 85%) rotate(120deg);
            }
            66% {
              transform: translate(75%, 25%) rotate(240deg);
            }
            100% {
              transform: translate(65%, 35%) rotate(360deg);
            }
          }

          @keyframes float10 {
            0% {
              transform: translate(45%, 75%) rotate(0deg);
            }
            33% {
              transform: translate(85%, 15%) rotate(120deg);
            }
            66% {
              transform: translate(25%, 65%) rotate(240deg);
            }
            100% {
              transform: translate(45%, 75%) rotate(360deg);
            }
          }

          @keyframes float11 {
            0% {
              transform: translate(85%, 45%) rotate(0deg);
            }
            33% {
              transform: translate(35%, 75%) rotate(120deg);
            }
            66% {
              transform: translate(65%, 25%) rotate(240deg);
            }
            100% {
              transform: translate(85%, 45%) rotate(360deg);
            }
          }
        `}
      </style>
      <aside className="sidebar">
        {/* Floating Technology Icons */}
        <div className="floating-icons">
          <div className="float-icon js-icon">
            <DiJavascript1 />
          </div>
          <div className="float-icon react-icon">
            <DiReact />
          </div>
          <div className="float-icon node-icon">
            <DiNodejs />
          </div>
          <div className="float-icon python-icon">
            <DiPython />
          </div>
          <div className="float-icon html-icon">
            <DiHtml5 />
          </div>
          <div className="float-icon css-icon">
            <DiCss3 />
          </div>
          <div className="float-icon typescript-icon">
            <SiTypescript />
          </div>
          <div className="float-icon tailwind-icon">
            <SiTailwindcss />
          </div>
          <div className="float-icon mongodb-icon">
            <DiMongodb />
          </div>
          <div className="float-icon git-icon">
            <DiGit />
          </div>
          <div className="float-icon database-icon">
            <DiDatabase />
          </div>
        </div>
        
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              <span className="nav-icon"><FaHome /></span>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              <span className="nav-icon"><FaUser /></span>
              <span className="nav-text">About Me</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
              <span className="nav-icon"><FaProjectDiagram /></span>
              <span className="nav-text">Projects</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              <span className="nav-icon"><FaEnvelope /></span>
              <span className="nav-text">Contact</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
