import React, { useState } from "react";

function Header(props) {
  const [shown, setShown] = useState(false);

  return (
    <header className="App-header">
      <h1>Marianne Seiwert</h1>
      <nav>
        {/* TODO: Make header fixed. Refer to sticky tab. */}
        <a className="smoothscroll" href="#about">
          About
        </a>
        <a className="smoothscroll" href="#projects">
          Projects
        </a>

        {/* TODO: Set up the pdf viewer for resume. Use resume.js or data.js or however it should be. https://react-pdf-viewer.dev/docs/basic-usage/*/}
        {/* https://react-pdf-viewer.dev/examples/preview-a-document-inside-a-modal/ */}
        <button onClick={() => setShown(true)}>Resume</button>

        <a className="smoothscroll" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
