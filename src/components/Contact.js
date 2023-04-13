import React, { useState } from "react";
import "../styling/Contact.css";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { IconContext } from "react-icons";

function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  function CopyEmail(isCopiedText) {
    navigator.clipboard.writeText("mjseiwert@outlook.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <>
      <div className="contact-page">
        <section className="contact">
          <h1>Let's Connect!</h1>
          <div className="contact-info">
            <ul>
              <li>
                <div onClick={() => CopyEmail(true)}>
                  <IconContext.Provider
                    value={{
                      color: "rgb(234, 4, 126)",
                      size: "2.25em",
                    }}
                  >
                    <HiOutlineMail className="email" />
                  </IconContext.Provider>
                  {isCopied == true ? (
                    <span> Copied to clipboard!</span>
                  ) : (
                    <span>mjseiwert@outlook.com</span>
                  )}
                </div>
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
                <a
                  href="https://github.com/penelopeundercover"
                  target="blank"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  https://github.com/penelopeundercover
                </a>
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
                <a
                  href="https://www.linkedin.com/in/marianne-seiwert"
                  target="blank"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  https://www.linkedin.com/in/marianne-seiwert
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
