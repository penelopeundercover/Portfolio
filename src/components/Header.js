import React, { useState } from "react";

function Header(props) {
  //   const [inputTxt, setInputTxt] = useState("Go Chiefs!");

  //   const handleChange = (e) => {
  //     setInputTxt(e.target.value);
  //   };

  return (
    <header className="App-header">
      <h1>Marianne Seiwert</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Resume</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
