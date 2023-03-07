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
        {["sm"].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand className="title" as={Link} to={"/Portfolio/"}>
                Marianne Seiwert
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Marianne Seiwert
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className="nav-links" as={Link} to={"/"}>
                      Home
                    </Nav.Link>
                    <Nav.Link className="nav-links" as={Link} to={"/about"}>
                      About
                    </Nav.Link>
                    <Nav.Link className="nav-links" as={Link} to={"/projects"}>
                      Projects
                    </Nav.Link>
                    <Nav.Link className="nav-links" as={Link} to={"/contact"}>
                      Contact
                    </Nav.Link>
                    {/* Resume */}
                    <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </header>

      <Routes>
        <Route exact path="/Portfolio/" element={<Home />} />
        <Route exact path="/Portfolio/projects" element={<Projects />} />
        <Route exact path="/Portfolio/resume" element={<Resume />} />
        <Route exact path="/Portfolio/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
