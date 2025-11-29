import React from "react";
import resume from "../data/resume";

import hackthonImg from "../hackthon.png";
import servicenowImg from "../servicenow.png";
import awsCertImg from "./image.png";
import internshipImg from "../intern.png";
import salesforceImg from "../salesforce.png";

function Certifications() {
  // Map certificate names to image paths
  const certImages = {
    "AWS Certified Cloud Practitioner": awsCertImg,
    "Salesforce Certified Agent Force Specialist": salesforceImg,
    "ServiceNow Micro-Certifications": servicenowImg,
    "HackIndia 2025": hackthonImg,
    "Internship - Zealous Tech Corp": internshipImg,
    // Add more mappings as you add images
  };

  return (
    <div className="container">
      <section>
        <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>Certifications & Achievements</h2>

      {/* Certifications Grid */}
      <div className="certifications-grid" style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))" }}>
        {resume.certifications.map((c, i) => (
          <div
            key={i}
            className="card certification-card"
            style={{
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              height: "100%",
            }}
          >
            <h3 style={{ 
              margin: 0, 
              textAlign: "center",
              fontSize: "1.15rem",
              fontWeight: "600",
              color: "var(--text)"
            }}>
              {c.name}
            </h3>
            
            <span
              style={{
                color: "var(--muted)",
                textAlign: "center",
                fontSize: "0.9rem",
                fontWeight: "500"
              }}
            >
              {c.issuer}
            </span>
            
            {c.note && (
              <div
                style={{
                  color: "var(--muted)",
                  textAlign: "center",
                  fontSize: "0.85rem",
                  lineHeight: "1.5"
                }}
              >
                {c.note}
              </div>
            )}
            
            {/* Show certificate image if available */}
            {certImages[c.name] ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "auto"
                }}
              >
                <img
                  src={certImages[c.name]}
                  alt={c.name + " certificate"}
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                    height: "auto",
                    borderRadius: "12px",
                    border: "1px solid var(--border)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    objectFit: "cover"
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  marginTop: "auto",
                  color: "var(--muted)",
                  fontSize: "0.85rem",
                  textAlign: "center",
                  fontStyle: "italic"
                }}
              >
                Certificate image coming soon
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Certifications;
