import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectList from "../../data/projectList";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos</strong> Recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos nos quais trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectList.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
