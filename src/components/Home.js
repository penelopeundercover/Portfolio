// TODO: Make box appear with fade effect on page load without having to click.
//       Stop fade effect after initial visit to the homepage.

import React from "react";
import "../styling/Home.css";
import MarianneSeiwert from "./MarianneSeiwert.jpg";

function Home() {
  return (
    <>
      <div className="about">
        <section className="about-me">
          <h1>Hi! I'm Marianne.</h1>
          <div className="bio">
            <img
              src={MarianneSeiwert}
              alt="Marianne"
              className="Marianne"
            ></img>
            <p>
              I recently earned a certificate from the University of Kansas
              Coding Bootcamp while working full-time as a bulldozer operator.
              Currently continuing to grow as a full stack web developer with
              skills in the MERN stack. I'm especially passionate about working
              with databases. In addition to coding and bulldozers, I love
              playing the piano, cooking, nurturing my beloved houseplants, and
              reading.
            </p>
            {/* <p>
              Straight-shooting and intuitive full stack web developer ready to
              use MERN Stack skills in a lively collaborative environment.
              Recently earned a certificate from the University of Kansas Coding
              Bootcamp while working full-time as a bulldozer operator.
              Construction experience has developed tenacity, solid work ethic,
              and a make-it-work mindset. Seeking a long-term position in a
              strong company that expects high-quality output and positive
              collaboration.
            </p> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
