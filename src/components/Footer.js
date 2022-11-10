import React, { useState } from "react";
import { ModalFooter } from "react-bootstrap";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/penelopeundercover">
        <FaGithub />
      </a>

      <a href="https://www.linkedin.com/in/marianne-seiwert">
        <SiLinkedin />
      </a>
    </footer>
  );
};

export default Footer;
