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
    <section>
      <h2 style={{ marginBottom: "1rem" }}>Certifications & Achievements</h2>

      {/* AWS Certification Section - image only, with title */}
      <div
        className="card"
        style={{
          marginBottom: "1.5rem",
          padding: "1.5rem",
          width: "100%",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: "0 0 1rem 0", textAlign: "center" }}>
          AWS Certified Cloud Practitioner
        </h3>
        <img
          src={awsCertImg}
          alt="AWS Certified Cloud Practitioner certificate"
          style={{
            width: "100%",
            maxWidth: 400,
            borderRadius: "8px",
            border: "1px solid var(--border)",
          }}
        />
      </div>

      {/* Other Certifications */}
      <div style={{ display: "grid", gap: "1.25rem" }}>
        {resume.certifications
          .filter((c) => c.name !== "AWS Certified Cloud Practitioner")
          .map((c, i) => (
            <div
              key={i}
              className="card"
              style={{
                width: "100%",
                maxWidth: "100%",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3 style={{ margin: "0 0 1rem 0", textAlign: "center" }}>
                {c.name}
              </h3>
              <span
                style={{
                  color: "var(--muted)",
                  marginBottom: "0.5rem",
                  textAlign: "center",
                }}
              >
                {c.issuer}
              </span>
              {c.note && (
                <div
                  style={{
                    color: "var(--muted)",
                    marginBottom: "0.75rem",
                    textAlign: "center",
                  }}
                >
                  {c.note}
                </div>
              )}
              {/* Show certificate image if available */}
              {certImages[c.name] ? (
                <div
                  style={{
                    marginTop: "0.75rem",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={certImages[c.name]}
                    alt={c.name + " certificate"}
                    style={{
                      width: "100%",
                      maxWidth: 400,
                      borderRadius: "8px",
                      border: "1px solid var(--border)",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    marginTop: "0.75rem",
                    color: "var(--muted)",
                    fontSize: "0.95em",
                    textAlign: "center",
                  }}
                >
                  <em>Certificate image coming soon</em>
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}

export default Certifications;
