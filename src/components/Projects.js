import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { projectInfo } from "./Data";
import "../styling/Projects.css";

const Projects = () => {
  return (
    <>
      <section id="projects">
        {/* <div id="projectCards"> */}
        <Container fluid>
          <Row id="projectCards">
            {projectInfo.map((Val, key) => {
              const { image, heading, link } = Val;
              return (
                <Col key={key} className="card">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                      <Card.Title>{heading}</Card.Title>
                      <Card.Link href="#">{`${link}`}</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        {/* </div> */}
      </section>
    </>
  );
};

export default Projects;
