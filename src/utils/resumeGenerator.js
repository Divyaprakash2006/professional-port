
export const generateResumePDF = () => {
  const link = document.createElement('a');
  link.href = process.env.PUBLIC_URL + '/DIVYAPRAKASH V - RESUME.pdf';
  link.download = 'DIVYAPRAKASH V - RESUME.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};