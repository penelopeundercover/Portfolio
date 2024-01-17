import React, { useState, useEffect } from "react";
import "../styling/Home.css";
import MarianneSeiwert from "./MarianneSeiwert.jpg";

function Home() {
  const [AboutClasses, setAboutClasses] = useState("about");
  const queryParameters = new URLSearchParams(window.location.search);
  const IsInitialLoad = queryParameters.get("i");
  useEffect(() => {
    if (IsInitialLoad != undefined && IsInitialLoad != null && IsInitialLoad) {
      setAboutClasses("about initial-load");
    }
  }, []);
  return (
    <>
      <div className={AboutClasses}>
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
              playing the piano, nurturing my beloved houseplants, going to
              concerts with my husband, and meeting new people.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
