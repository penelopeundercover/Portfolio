import React, { useState } from "react";

function Header(props) {
  const [shown, setShown] = useState(false);
  //   const [inputTxt, setInputTxt] = useState("Go Chiefs!");

  //   const handleChange = (e) => {
  //     setInputTxt(e.target.value);
  //   };

  return (
    <header className="App-header">
      <h1>Marianne Seiwert</h1>
      <nav>
        {/* TODO: Not sure if this button/scroll thing is going to work. Make it work. Refer to sticky tab. */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Home
        </button>
        {/* TODO: Add # to sections */}
        <a className="smoothscroll" href="#">
          About
        </a>

        <a className="smoothscroll" href="#">
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
