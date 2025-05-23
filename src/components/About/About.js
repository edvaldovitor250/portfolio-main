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
              Sabia quem <strong className={styles.purple}>sou eu</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className={styles.aboutImg}>
            <img src={laptopImg} alt="Sobre mim" className="img-fluid" />
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
