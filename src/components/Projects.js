import React from "react";
import Card from "react-bootstrap/Card";
import { projectInfo } from "./Data";
import Header from "./Header";
import Footer from "./Footer";

const Projects = () => {
  return (
    <section id="projects">
      <Header></Header>
      <div className="row">
        <h1> Projects</h1>
      </div>
      {projectInfo.map((Val, key) => {
        const { image, heading, link } = Val;
        return (
          // Future: Make 15-23 a separate component and import it.
          <div className="cards" key={key}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{heading}</Card.Title>
                <Card.Link href="#">{`${link}`}</Card.Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      <Footer></Footer>
    </section>
  );
};

export default Projects;
