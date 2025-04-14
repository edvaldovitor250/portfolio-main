import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import techStackData from "../../data/techStack";
import toolStackData from "../../data/toolStack";
import TechIcons from "./TechIcons";
import styles from "./About.module.css";

function About() {
  return (
    <Container fluid className={styles.aboutSection}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Sabia quem <strong className={styles.purple}>Sou eu</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className={styles.aboutImg}>
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Competências <strong className={styles.purple}>Profissionais</strong>
        </h1>
        <TechIcons icons={techStackData} />

        <h1 className="project-heading">
          <strong className={styles.purple}>Ferramentas</strong> que utilizo
        </h1>
        <TechIcons icons={toolStackData} />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
