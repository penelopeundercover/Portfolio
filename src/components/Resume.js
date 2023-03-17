// Future: Use react pdf viewer for resume.

import React from "react";
import Footer from "./Footer";
function Resume() {
  return (
    <section id="resume">
      <h1>Resume</h1>
      <img
        src="../images/resume.png"
        className="resumeImage"
        alt="Marianne Seiwert Resume"
      />
      <Footer></Footer>
    </section>
  );
}

export default Resume;
