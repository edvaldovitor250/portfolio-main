import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../shared/Particle";
import Github from "./Github";
import Aboutcard from "../shared/ui/Card/AboutCard";
import laptopImg from "../../Assets/about.png";
import techStackData from "../../data/techStack";
import toolStackData from "../../data/toolStack";
import TechIcons from "./TechIcons";
import styles from "./About.module.css";
import certImg from "../../Assets/certificate/oracle-certificacao.png";

const About = () => {
  return (
    <Container fluid className={styles.aboutSection}>
      <Particle />
      <Container>
        {/* ...bloco existente... */}

        <h1 className="project-heading">
          <strong className={styles.purple}>Ferramentas</strong> que utilizo
        </h1>
        <TechIcons icons={toolStackData} />

        {/* Nova seção de Certificações */}
        <h1 className="project-heading">
          Minhas <strong className={styles.purple}>Certificações</strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "20px 0" }}>
          <Col xs={12} md={4} style={{ textAlign: "center" }}>
          <img
              src={certImg}
              alt="Oracle Certification"
              style={{ maxWidth: "150px", width: "100%" }}
              className="img-fluid mb-3"
            />
            <p>Oracle Certified Foundations Associate 2025</p>
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
};

export default About;
