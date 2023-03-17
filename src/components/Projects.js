import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { projectInfo } from "./Data";
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <h1> Projects</h1>
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
        <Footer></Footer>
      </section>
    </>
  );
};

export default Projects;
