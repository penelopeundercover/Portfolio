//TODO: Make iframe responsive

import React from "react";
import "../styling/Resume.css";

function Resume() {
  return (
    <div>
      <iframe
        src={process.env.PUBLIC_URL + "/Marianne-Seiwert-Resume-ATS.pdf"}
        title="Marianne Seiwert Resume"
      ></iframe>
    </div>
  );
}

export default Resume;
