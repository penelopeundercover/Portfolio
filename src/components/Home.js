// TODO: Make box appear with fade effect on page load
//       Stop fade effect after initial visit to the homepage

import React from "react";
import "../styling/Home.css";
import MarianneSeiwert from "./MarianneSeiwert.jpg";
import { loadFromFile } from "react-pdf/dist/cjs/shared/utils";

function Home() {
  return (
    <>
      <div className="about">
        <section className="about-me">
          <h1>About Me</h1>
          <div className="bio">
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
              and a make-it-work mindset. Seeking a long-term position in a
              strong company that expects high-quality output and positive
              collaboration.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
