import "./App.css";
import "./styling/Header.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const getHamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  };
  //  const openPDF = () => {
  //   window.open("images/resume/resume.pdf","_blank");
  // }

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">
          <button>Marianne Seiwert</button>
        </h1>
        <nav className="navbar">
          <ul className="nav-menu">
            <li className="nav-link">
              {/* Why isn't activeClassName working? */}
              <Link to="/Portfolio/home" activeClassName="active">
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/Portfolio/projects" activeClassName="active">
                Projects
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/Portfolio/resume" activeClassName="active">
                Resume
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/Portfolio/contact" activeClassName="active">
                Contact
              </Link>
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
  );
}

{
  <Routes>
    <Route exact path="/Portfolio/" element={<Home />} />
    <Route exact path="/Portfolio/projects" element={<Projects />} />
    <Route exact path="/Portfolio/resume" element={<Resume />} />
    <Route exact path="/Portfolio/contact" element={<Contact />} />
  </Routes>;
}

export default App;
