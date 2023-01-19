import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobileNavBar">
      <CgMenu className="hamburger" size="2em" onClick={() => setOpen(!open)} />
      {open && (
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
      )}
    </div>
  );
};

export default Hamburger;
