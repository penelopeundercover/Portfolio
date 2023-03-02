// FUTURE: Link to resume
import "./App.css";

import { Link, Routes, Route } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <header>
        <h1 className="brand">
          <button className="title">Marianne Seiwert </button>
        </h1>
        <nav className="navBar">
          <ul className="navMenu">
            <li className="navLink">About</li>
            <li className="navLink">Projects</li>
            <li className="navLink">Resume</li>
            <li className="navLink">Contact</li>
          </ul>
        </nav>
      </header>
      Hello
      {/* <Routes>
        <Route exact path="/Portfolio/" element={<Home />} />
        <Route exact path="/Portfolio/projects" element={<Projects />} />
        <Route exact path="/Portfolio/resume" element={<Resume />} />
        <Route exact path="/Portfolio/contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
