import React, { Component } from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div id="about">
      <div id="header">
        <h1>Marianne Seiwert</h1>
        <ul>
          <li>
            <Link to="/Portfolio/">About</Link>
          </li>
          <li>
            <Link to="/Portfolio/projects">Projects</Link>
          </li>
          <li>
            <Link to="/Portfolio/resume">Resume</Link>
          </li>
          <li>
            <Link to="/Portfolio/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <section id="about-me">
        <h1>About Me</h1>
        <div id="bio">
          <img
            src="https://avatars.githubusercontent.com/u/106550809?v=4"
            alt="Marianne"
            className="Marianne"
          ></img>
          <p>
            Straight-shooting and intuitive full stack web developer ready to
            use MERN Stack skills as part of a lively collaborative environment.
            Recently earned a certificate from the University of Kansas Coding
            Bootcamp while working full-time as a bulldozer operator.
            Construction experience has developed tenacity, solid work ethic,
            and a make it work mindset. Seeking a long-term position in a strong
            company that expects high-quality output and positive collaboration.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
