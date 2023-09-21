import React from 'react';

export default function Resume() {

  const style = { border: '2px solid blue' };
  const currentYear = new Date().getFullYear();
  // const currentYear = currentDate.getFullYear();


  return (
    <div style={style}>
      <h3>Resume</h3>
      <iframe
        className="resumeViewer"
        src="../../../Joshua_Waalkes_Resume.pdf"
        width="100%"
        height="1200px"
        title={currentYear + "Resume"}
      />
      <button>Download as a PDF </button>
    </div>
  )
}