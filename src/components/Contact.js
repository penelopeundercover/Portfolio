import React from "react";
import "../styling/Contact.css";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className="contact-page">
        <section className="contact">
          <h1>Let's Connect!</h1>
          <div className="contact-info">
            <ul>
              <li>mjseiwert@outlook.com</li>
              <li>
                <a href="https://github.com/penelopeundercover" target="blank">
                  <FaGithub />
                </a>
                https://www.linkedin.com/in/marianne-seiwert/
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/marianne-seiwert"
                  target="blank"
                >
                  <SiLinkedin />
                </a>
                https://github.com/penelopeundercover
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
