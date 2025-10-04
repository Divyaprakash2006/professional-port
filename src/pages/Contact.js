import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';

function Contact() {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/918072597309', // WhatsApp number: +91 8072597309
      color: '#25D366',
      hoverColor: '#128C7E'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/profile.php?id=61577304756249',
      color: '#1877F2',
      hoverColor: '#166FE5'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/divyaprakash_vdp/?hl=en', // Replace with your Instagram username
      color: '#E4405F',
      hoverColor: '#C13584'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Divyaprakash2006', // Replace with your GitHub username
      color: '#333',
      hoverColor: '#6e5494'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/divyaprakash-v-2036222a5/', // Replace with your LinkedIn profile
      color: '#0077B5',
      hoverColor: '#005885'
    },
    {
      name: 'Email',
      displayName: 'diviyaprakash32@gmail.com',
      icon: FaEnvelope,
      url: 'mailto:diviyaprakash32@gmail.com', // Your email address
      color: '#D44638',
      hoverColor: '#B23121'
    }
  ];
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email is required';
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    
    setSent(true);
    setStatus({ type: '', message: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        setForm({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setSent(false);
    }
  };

  return (
    <section className="container" style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.75rem' }}>Contact Me</h2>

        {/* Two Column Layout */}
        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>

          {/* Left Column - Contact Form */}
          <div>
            <h3 style={{
              fontSize: '1.25rem',
              marginBottom: '1.5rem',
              color: 'var(--text)',
              fontWeight: '600'
            }}>
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
              {/* Name Field */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--muted)' }}>
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: '#0d1326',
                    color: 'var(--text)',
                    fontSize: '1rem'
                  }}
                />
                {errors.name && (
                  <div style={{ color: '#f87171', fontSize: '0.875rem', marginTop: '0.375rem' }}>
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--muted)' }}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: '#0d1326',
                    color: 'var(--text)',
                    fontSize: '1rem'
                  }}
                />
                {errors.email && (
                  <div style={{ color: '#f87171', fontSize: '0.875rem', marginTop: '0.375rem' }}>
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--muted)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: '#0d1326',
                    color: 'var(--text)',
                    resize: 'vertical',
                    fontSize: '1rem',
                    lineHeight: '1.5'
                  }}
                />
                {errors.message && (
                  <div style={{ color: '#f87171', fontSize: '0.875rem', marginTop: '0.375rem' }}>
                    {errors.message}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                className="btn primary"
                type="submit"
                disabled={sent}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  width: '100%',
                  marginTop: '0.5rem'
                }}
              >
                {sent ? 'Sending…' : 'Send message'}
              </button>

              {/* Status Message */}
              {status.message && (
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    textAlign: 'center',
                    marginTop: '1rem',
                    backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
                    color: status.type === 'success' ? '#155724' : '#721c24',
                    border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                  }}
                >
                  {status.message}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Right Column - Social Media */}
      <div>
        <h3 style={{
          fontSize: '1.25rem',
          marginBottom: '1.5rem',
          color: 'var(--text)',
          fontWeight: '600'
        }}>
          Let's Connect
        </h3>

        <div style={{
          backgroundColor: 'var(--surface)',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid var(--border)',
          height: 'fit-content'
        }}>
          <p style={{
            color: 'var(--muted)',
            marginBottom: '2rem',
            fontSize: '1rem',
            textAlign: 'center'
          }}>
            Find me on social media or send me a direct message
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                {...(social.name !== 'Email' && { target: '_blank', rel: 'noopener noreferrer' })}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: social.color,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: '1.25rem 1rem',
                  borderRadius: '16px',
                  backgroundColor: 'transparent',
                  border: `2px solid ${social.color}30`,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: `0 0 20px ${social.color}15, inset 0 0 20px ${social.color}05`,
                  backdropFilter: 'blur(10px)',
                  background: `linear-gradient(135deg, ${social.color}08 0%, transparent 50%, ${social.hoverColor}05 100%)`
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${social.hoverColor}20 0%, ${social.color}15 50%, ${social.hoverColor}10 100%)`;
                  e.target.style.transform = 'translateY(-4px) scale(1.02)';
                  e.target.style.borderColor = social.hoverColor;
                  e.target.style.boxShadow = `0 0 30px ${social.hoverColor}40, 0 0 60px ${social.hoverColor}20, inset 0 0 30px ${social.hoverColor}10`;
                  e.target.style.backdropFilter = 'blur(15px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${social.color}08 0%, transparent 50%, ${social.hoverColor}05 100%)`;
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.borderColor = `${social.color}30`;
                  e.target.style.boxShadow = `0 0 20px ${social.color}15, inset 0 0 20px ${social.color}05`;
                  e.target.style.backdropFilter = 'blur(10px)';
                }}
              >
                <div style={{
                  marginBottom: '0.75rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  filter: `drop-shadow(0 0 8px ${social.color}30)`
                }}
                onMouseEnter={(e) => {
                  e.target.style.filter = `drop-shadow(0 0 15px ${social.hoverColor}60) drop-shadow(0 0 30px ${social.hoverColor}30)`;
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.filter = `drop-shadow(0 0 8px ${social.color}30)`;
                  e.target.style.transform = 'scale(1)';
                }}
                >
                  <social.icon size={32} />
                </div>
                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: social.color,
                  textAlign: 'center',
                  marginBottom: social.displayName ? '0.25rem' : '0'
                }}>
                  {social.name}
                </span>
                {social.displayName && (
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: '500',
                    color: 'var(--muted)',
                    textAlign: 'center',
                    opacity: 0.9,
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto',
                    maxWidth: '100%',
                    lineHeight: '1.2'
                  }}>
                    {social.displayName}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--background)',
            borderRadius: '12px',
            border: '1px solid var(--border)'
          }}>
            <p style={{
              color: 'var(--muted)',
              fontSize: '0.9rem',
              margin: '0',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>
              💡 <strong>Pro tip:</strong> You can reach me directly through the contact form or connect with me on any of these platforms. I'm always excited to discuss new opportunities!
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
  );
}

export default Contact;
