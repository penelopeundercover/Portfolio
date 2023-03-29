import React from "react";
import "../styling/Contact.css";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

function Contact() {
  return (
    <>
      <div className="contact-page">
        <section className="contact">
          <h1>Let's Connect!</h1>
          <div className="contact-info">
            <ul>
              <li>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("mjseiwert@outlook.com");
                  }}
                >
                  <IconContext.Provider
                    value={{
                      color: "rgb(234, 4, 126)",
                      size: "2.25em",
                    }}
                  >
                    <HiOutlineMail className="email" />
                  </IconContext.Provider>
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("mjseiwert@outlook.com");
                  }}
                >
                  mjseiwert@outlook.com
                </button>
              </li>

              <li>
                <a
                  href="https://github.com/penelopeundercover"
                  target="blank"
                  class="github"
                >
                  <IconContext.Provider
                    value={{
                      color: "rgb(56, 229, 77)",
                      size: "2em",
                    }}
                  >
                    <FaGithub className="github" />
                  </IconContext.Provider>
                </a>
                https://github.com/penelopeundercover
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/marianne-seiwert"
                  target="blank"
                  class="linkedin"
                >
                  <IconContext.Provider
                    value={{
                      color: "rgb(33, 146, 255)",
                      size: "2em",
                    }}
                  >
                    <SiLinkedin className="linkedin" />
                  </IconContext.Provider>
                </a>
                https://www.linkedin.com/in/marianne-seiwert
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
