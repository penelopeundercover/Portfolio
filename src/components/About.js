import React, { useState } from "react";

function About(props) {
  return (
    <section id="about-me">
      <img src="https://avatars.githubusercontent.com/u/106550809?v=4">
        alt="Marianne" class="Marianne"
      </img>
      <h1>About Me</h1>
      <div id="about-me-text">
        {/* TODO: Write something else for this section */}
        <p>
          Straight-shooting and intuitive full stack web developer ready to use
          MERN Stack skills as part of a lively collaborative environment.
          Recently earned a certificate from the University of Kansas Coding
          Bootcamp while working full-time as a bulldozer operator. Construction
          experience has developed tenacity, solid work ethic, and a make it
          work mindset. Seeking a long-term position in a strong company that
          expects high-quality output and positive collaboration.
        </p>
      </div>
    </section>
  );
}

export default About;
