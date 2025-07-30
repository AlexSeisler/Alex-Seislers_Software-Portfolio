export const downloadResume = () => {
  const resumePath = '/Resume/Alex-Seisler_AI-Software-Engineer_Resume.pdf';
  const link = document.createElement('a');
  link.href = resumePath;
  link.download = 'Alex-Seisler_AI-Software-Engineer_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};