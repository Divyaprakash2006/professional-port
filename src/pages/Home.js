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
        style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "100%" }}
      >
        {/* Professional Photo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "clamp(15px, 4vw, 25px)",
            marginTop: "0",
            opacity: 0,
            animation: "fadeIn 800ms forwards",
            width: "100%",
            maxWidth: "100%",
            padding: "0 1rem",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "clamp(150px, 40vw, 220px)",
              height: "clamp(150px, 40vw, 220px)",
              maxWidth: "220px",
              maxHeight: "220px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "clamp(3px, 0.5vw, 5px) solid rgba(108, 140, 255, 0.4)",
              boxShadow:
                "0 0 clamp(20px, 4vw, 40px) rgba(108, 140, 255, 0.5), 0 0 clamp(40px, 8vw, 80px) rgba(34, 211, 238, 0.3)",
              background:
                "linear-gradient(135deg, rgba(108, 140, 255, 0.1), rgba(34, 211, 238, 0.1))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              transition: "all 0.3s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(108, 140, 255, 0.6), 0 0 80px rgba(34, 211, 238, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
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
            marginBottom: "clamp(8px, 2vw, 15px)",
            marginTop: "clamp(5px, 2vw, 10px)",
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            lineHeight: "1.2",
            width: "100%",
            padding: "0 1rem",
            boxSizing: "border-box",
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
                maxWidth: "min(780px, 90vw)",
                textAlign: "center",
                opacity: 0,
                animation: "fadeIn 600ms forwards",
                marginTop: "clamp(5px, 2vw, 10px)",
                lineHeight: "1.6",
                marginBottom: "1rem",
                fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                padding: "0 1rem",
                boxSizing: "border-box",
                width: "100%",
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
