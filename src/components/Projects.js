import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { projectInfo } from "./data";

const Projects = () => {
  return (
    <section id="projects">
      <div className="row">
        <h1> Projects</h1>
      </div>
      {/* TODO: Did I do the key right? */}
      {projectInfo.map((Val, key) => {
        const { image, heading, link } = Val;
        return (
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
    </section>
  );
};

export default Projects;
