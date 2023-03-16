import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [shown, setShown] = useState(false);

  return (
    <>
      <header>
        <h1>Marianne Seiwert</h1>
        <div className="navBar">
          <ul>
            <li>
              <Link to="/Portfolio/">About</Link>
            </li>
            <li>
              <Link to="/Portfolio/projects">Projects</Link>
            </li>

            {/* Future: Set up the pdf viewer for resume. Use resume.js or data.js or however it should be. https://react-pdf-viewer.dev/docs/basic-usage/*/}
            {/* https://react-pdf-viewer.dev/examples/preview-a-document-inside-a-modal/ */}
            {/* <button onClick={() => setShown(true)}>Resume</button> */}
            <li>
              <Link to="/Portfolio/resume">Resume</Link>
            </li>
            <li>
              <Link to="/Portfolio/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
