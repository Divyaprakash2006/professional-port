import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";

function Contact() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/918072597309", // WhatsApp number: +91 8072597309
      color: "#25D366",
      hoverColor: "#128C7E",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/profile.php?id=61577304756249",
      color: "#1877F2",
      hoverColor: "#166FE5",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/divyaprakash_vdp/?hl=en", // Replace with your Instagram username
      color: "#E4405F",
      hoverColor: "#C13584",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Divyaprakash2006", // Replace with your GitHub username
      color: "#333",
      hoverColor: "#6e5494",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/divyaprakash-v-2036222a5/", // Replace with your LinkedIn profile
      color: "#0077B5",
      hoverColor: "#005885",
    },
    {
      name: "Email",
      displayName: "diviyaprakash32@gmail.com",
      icon: FaEnvelope,
      url: "mailto:diviyaprakash32@gmail.com", // Your email address
      color: "#D44638",
      hoverColor: "#B23121",
    },
  ];

  return (
    <section className="container" style={{ padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            fontSize: "1.75rem",
          }}
        >
          Contact Me
        </h2>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "var(--surface)",
            borderRadius: "16px",
            padding: "2rem",
            border: "1px solid var(--border)",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              marginBottom: "1.5rem",
              color: "var(--text)",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Let's Connect
          </h3>

          <p
            style={{
              color: "var(--muted)",
              marginBottom: "2rem",
              fontSize: "1rem",
              textAlign: "center",
            }}
          >
            Find me on social media or send me a direct message
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                {...(social.name !== "Email" && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  color: social.color,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  padding: "1.25rem 1rem",
                  borderRadius: "16px",
                  backgroundColor: "transparent",
                  border: `2px solid ${social.color}30`,
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: `0 0 20px ${social.color}15, inset 0 0 20px ${social.color}05`,
                  backdropFilter: "blur(10px)",
                  background: `linear-gradient(135deg, ${social.color}08 0%, transparent 50%, ${social.hoverColor}05 100%)`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${social.hoverColor}20 0%, ${social.color}15 50%, ${social.hoverColor}10 100%)`;
                  e.target.style.transform = "translateY(-4px) scale(1.02)";
                  e.target.style.borderColor = social.hoverColor;
                  e.target.style.boxShadow = `0 0 30px ${social.hoverColor}40, 0 0 60px ${social.hoverColor}20, inset 0 0 30px ${social.hoverColor}10`;
                  e.target.style.backdropFilter = "blur(15px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${social.color}08 0%, transparent 50%, ${social.hoverColor}05 100%)`;
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.borderColor = `${social.color}30`;
                  e.target.style.boxShadow = `0 0 20px ${social.color}15, inset 0 0 20px ${social.color}05`;
                  e.target.style.backdropFilter = "blur(10px)";
                }}
              >
                <div
                  style={{
                    marginBottom: "0.75rem",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    filter: `drop-shadow(0 0 8px ${social.color}30)`,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = `drop-shadow(0 0 15px ${social.hoverColor}60) drop-shadow(0 0 30px ${social.hoverColor}30)`;
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = `drop-shadow(0 0 8px ${social.color}30)`;
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <social.icon size={32} />
                </div>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: social.color,
                    textAlign: "center",
                    marginBottom: social.displayName ? "0.25rem" : "0",
                  }}
                >
                  {social.name}
                </span>
                {social.displayName && (
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: "500",
                      color: "var(--muted)",
                      textAlign: "center",
                      opacity: 0.9,
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                      hyphens: "auto",
                      maxWidth: "100%",
                      lineHeight: "1.2",
                    }}
                  >
                    {social.displayName}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "var(--background)",
              borderRadius: "12px",
              border: "1px solid var(--border)",
            }}
          >
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.9rem",
                margin: "0",
                lineHeight: "1.6",
                textAlign: "center",
              }}
            >
              💡 <strong>Pro tip:</strong> You can reach me directly through
              the links above or connect with me on any of these platforms.
              I'm always excited to discuss new opportunities!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
