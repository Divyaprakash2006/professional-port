import React, { useState, useEffect } from "react";
import resume from "../data/resume";
import Typewriter from "../components/Typewriter";
import profilePhoto from "../photo-10.jpg";

// Home shows dynamic typed name then the professional summary

function Home() {
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  return (
    <section
      className="home-hero image-bg"
      style={{ "--hero-bg": "url('pages/image.png')" }}
    >
      <div
        className="container home-content home-shift-up"
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Professional Photo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            marginTop: "-100px",
            opacity: 0,
            animation: "fadeIn 800ms forwards",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "5px solid rgba(108, 140, 255, 0.4)",
              boxShadow:
                "0 0 40px rgba(108, 140, 255, 0.5), 0 0 80px rgba(34, 211, 238, 0.3)",
              background:
                "linear-gradient(135deg, rgba(108, 140, 255, 0.1), rgba(34, 211, 238, 0.1))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow =
                "0 0 40px rgba(108, 140, 255, 0.6), 0 0 80px rgba(34, 211, 238, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow =
                "0 0 30px rgba(108, 140, 255, 0.4), 0 0 60px rgba(34, 211, 238, 0.2)";
            }}
          >
            <img
              src={profilePhoto}
              alt="Professional headshot"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                borderRadius: "50%",
                transition: "transform 0.3s ease",
              }}
              onError={(e) => {
                // Fallback if image doesn't exist
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `
                  <div style="
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 48px;
                    color: rgba(108, 140, 255, 0.8);
                    background: linear-gradient(135deg, rgba(108, 140, 255, 0.2), rgba(34, 211, 238, 0.2));
                  ">
                    👤
                  </div>
                `;
              }}
            />
          </div>
        </div>

        <h1
          className="hero-title"
          style={{
            textAlign: "center",
            marginBottom: "15px",
            marginTop: "10px",
          }}
        >
          <Typewriter
            text="I'm Divyaprakash Venkatachalam"
            speed={80}
            loop={false}
            onComplete={() => setShowSummary(true)}
            className="gradient-text gradient-animate"
          />
        </h1>

        {showSummary && (
          <>
            <p
              className="lead mobile-summary"
              style={{
                maxWidth: 780,
                textAlign: "center",
                opacity: 0,
                animation: "fadeIn 600ms forwards",
                marginTop: "10px",
                lineHeight: "1.6",
                marginBottom: "1.5rem",
              }}
            >
              {resume.summary}
            </p>
          </>
        )}
      </div>

      {/* Dynamic floating objects for full-screen background */}
      <div className="floating-objects">
        <div className="object-1"></div>
        <div className="object-2"></div>
        <div className="object-3"></div>
        <div className="object-4"></div>
        <div className="object-5"></div>
        <div className="object-8"></div>
      </div>
    </section>
  );
}

export default Home;
