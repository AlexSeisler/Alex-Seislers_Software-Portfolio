export const downloadResume = () => {
  const resumePath = 'Resume/Alex_Seisler_Resume.pdf';
  const link = document.createElement('a');
  link.href = resumePath;
  link.download = 'Alex_Seisler_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};