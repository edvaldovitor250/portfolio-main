import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../shared/Particle";
import Home2 from "./HomeIntro";
import Type from "./TypewriterEffect";
import styles from "./Home.module.css";

const Home = () => (
  <section>
    <Container fluid className={styles.homeSection} id="home">
      <Particle />
      <Container className={styles.homeContent}>
        <Row>
          <Col md={7} className={styles.homeHeader}>
            <h1 style={{ paddingBottom: 15 }} className={styles.heading}>
              Olá!{" "}
              <span className={styles.wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className={styles.headingName}>
              Eu sou
              <strong className={styles.mainName}> Edvaldo Vitor</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={homeLogo}
              alt="Imagem principal Edvaldo Vitor"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
    <Home2 />
  </section>
);

export default Home;
