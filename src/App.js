import "./App.css";
import "./styling/Header.css";
import React, { useEffect, useState } from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [IsInitialLoad, setIsInitialLoad] = useState(true);
  const getHamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  };

  let navigate = useNavigate();
  useEffect(() => {
    if (IsInitialLoad) {
      navigate("/Portfolio/home?i=true");
      setIsInitialLoad(false);
    }
  }, []);

  return (
    <>
      <div className="App">
        <header className="header">
          <h1 className="title">
            <button onClick={() => navigate("/Portfolio/home")}>
              Marianne Seiwert
            </button>
          </h1>
          <nav className="navbar">
            <ul className="nav-menu">
              <li className="nav-link">
                <NavLink
                  to="/Portfolio/projects"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink
                  to="/Portfolio/resume"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Resume
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink
                  to="/Portfolio/contact"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="hamburger" ref={getHamburger}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </header>
      </div>

      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route exact path="/Portfolio/home" element={<Home />} />
        <Route exact path="/Portfolio/projects" element={<Projects />} />
        <Route exact path="/Portfolio/resume" element={<Resume />} />
        <Route exact path="/Portfolio/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
