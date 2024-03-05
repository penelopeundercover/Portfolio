import React from "react";
import "../styling/Resume.css";
import jpgResume from "./jpgResume.jpg";

function Resume() {
  return (
    <div class="resume-page">
      <img src={jpgResume} alt="Marianne's Resume" className="resume"></img>
      {/* <iframe
        src={process.env.PUBLIC_URL + "/Marianne-Seiwert-Resume-ATS.pdf"}
        title="Marianne Seiwert Resume"
      ></iframe> */}
    </div>
  );
}

export default Resume;
