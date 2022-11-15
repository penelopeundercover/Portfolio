import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/penelopeundercover" target="blank">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/marianne-seiwert" target="blank">
        <SiLinkedin />
      </a>
    </footer>
  );
};

export default Footer;
