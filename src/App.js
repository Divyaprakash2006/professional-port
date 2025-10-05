import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import EducationSkills from "./pages/EducationSkills";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <div className="layout">
        <main className="content-main">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<EducationSkills />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
