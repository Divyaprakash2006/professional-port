// Enhanced resume utilities for better PDF generation and formatting

export const formatPhoneNumber = (phone) => {
  // Format phone number from +91-8072597309 to +91 807 259 7309
  return phone.replace(/(\+\d{2})-?(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4');
};

export const formatDuration = (duration) => {
  // Convert duration formats like "2023 – 2027" to "2023 - 2027"
  return duration.replace('–', '-').replace('—', '-');
};

export const getResumeMetadata = () => {
  const currentDate = new Date();
  return {
    generatedOn: currentDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    version: '1.0',
    filename: `Divyaprakash_Resume_${currentDate.toISOString().split('T')[0]}.pdf`
  };
};

export const validateResumeData = (resume) => {
  const errors = [];
  
  if (!resume.name) errors.push('Name is required');
  if (!resume.contact?.email) errors.push('Email is required');
  if (!resume.summary) errors.push('Professional summary is required');
  if (!resume.education?.length) errors.push('Education information is required');
  if (!resume.skills) errors.push('Skills information is required');
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Color palette for PDF styling
export const resumeColors = {
  primary: '#4c63d2',
  secondary: '#64748b',
  accent: '#0ea5e9',
  text: '#1e293b',
  muted: '#64748b',
  light: '#f1f5f9'
};

// Professional fonts for PDF
export const resumeFonts = {
  heading: 'helvetica',
  body: 'helvetica',
  sizes: {
    name: 24,
    sectionHeader: 14,
    jobTitle: 12,
    body: 10,
    small: 9
  }
};

const resumeUtils = {
  formatPhoneNumber,
  formatDuration,
  getResumeMetadata,
  validateResumeData,
  resumeColors,
  resumeFonts
};

export default resumeUtils;