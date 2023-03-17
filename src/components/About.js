import React from "react";
import Footer from "./Footer";
import MarianneSeiwert from "./MarianneSeiwert.jpg";

function About() {
  return (
    <>
      <div id="about">
        <section id="about-me">
          <h1>About Me</h1>
          <div id="bio">
            <img
              src={MarianneSeiwert}
              alt="Marianne"
              className="Marianne"
            ></img>
            <p>
              Straight-shooting and intuitive full stack web developer ready to
              use MERN Stack skills in a lively collaborative environment.
              Recently earned a certificate from the University of Kansas Coding
              Bootcamp while working full-time as a bulldozer operator.
              Construction experience has developed tenacity, solid work ethic,
              and a make it work mindset. Seeking a long-term position in a
              strong company that expects high-quality output and positive
              collaboration.
            </p>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
