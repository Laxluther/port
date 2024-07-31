import React from 'react';

const Resume = () => {
  
  const pdfUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  return (
    <div>
      <a href={pdfUrl} download="My_Resume.pdf">
      <h1>Resume</h1>
      </a>
    </div>
  );
};

export default Resume;
