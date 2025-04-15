import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../shared/ui/Card/ProjectCards";
import Particle from "../shared/Particle";
import projectList from "../../data/projectList";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <Container fluid className={styles.projectSection}>
      <Particle />
      <Container>
        <h1 className={styles.projectHeading}>
          Meus <strong className="purple">Projetos</strong> Recentes
        </h1>
        <p className={styles.textWhite}>
          Aqui estão alguns projetos nos quais trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectList.map((project, index) => (
            <Col md={4} className={styles.projectCard} key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
