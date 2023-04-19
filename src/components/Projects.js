import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { projectInfo } from "./Data";
import "../styling/Projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <Row className="row">
          {projectInfo.map((Val, key) => {
            const { image, heading, link } = Val;
            return (
              <Col xs={12} sm={12} md={4} className="column">
                <Card key={key} className="card">
                  <Card style={{ maxWidth: "18rem" }}>
                    <Card.Img variant="top" src={image} className="img-fluid" />
                    <Card.Body>
                      <Card.Link
                        className="text-dark"
                        href={link}
                        target="blank"
                      >
                        {heading}
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Projects;
