import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { projectInfo } from "./Data";
import Header from "./Header";
import Footer from "./Footer";

const Projects = () => {
  return (
    <section id="projects">
      <Header></Header>
      <div className="projectCards">
        <h1> Projects</h1>
        <Container fluid>
          <Row>
            {projectInfo.map((Val, key) => {
              const { image, heading, link } = Val;
              return (
                <Col key={key} xs={4}>
                  <div className="card">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={image} />
                      <Card.Body>
                        <Card.Title>{heading}</Card.Title>
                        <Card.Link href="#">{`${link}`}</Card.Link>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default Projects;
