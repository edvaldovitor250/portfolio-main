import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import socialLinks from "../../data/socialLinks";
import styles from "./Home.module.css";

const Home2 = () => (
  <Container fluid className={styles.homeAboutSection} id="about">
    <Container>
      <Row>
        <Col md={8} className={styles.homeAboutDescription}>
          <h1 style={{ fontSize: "2.6em" }}>
            DEIXE-ME <span className={styles.purple}>ME APRESENTAR</span>
          </h1>
          <p className={styles.homeAboutBody}>
            Sou apaixonado por programação e, ao longo da minha jornada,
            venho aprendendo cada vez mais sobre esse universo incrível.
            <br />
            <br />
            Domino linguagens como{" "}
            <i>
              <b className={styles.purple}>Java, JavaScript e Python</b>
            </i>
            , sempre buscando aprimorar meus conhecimentos.
            <br />
            <br />
            Tenho grande interesse em criar novas{" "}
            <i>
              <b className={styles.purple}>tecnologias e soluções web</b>
            </i>
            , além de explorar áreas relacionadas à{" "}
            <b className={styles.purple}>análise e tratamento de dados.</b>
            <br />
            <br />
            Sempre que possível, aplico minha paixão pelo desenvolvimento de
            produtos utilizando <b className={styles.purple}>Python</b> e{" "}
            <i>
              <b className={styles.purple}>frameworks e bibliotecas modernos</b>
            </i>
            , como também{" "}
            <i>
              <b className={styles.purple}>React.js e JavaScript.</b>
            </i>
          </p>
        </Col>

        <Col md={4} className={styles.myAvatar}>
          <Tilt>
            <img
              src={myImg}
              className="img-fluid"
              alt="Avatar de Edvaldo Vitor"
            />
          </Tilt>
        </Col>
      </Row>

      <Row>
        <Col md={12} className={styles.homeAboutSocial}>
          <h1>ENCONTRE-ME EM</h1>
          <p>
            Fique à vontade para{" "}
            <span className={styles.purple}>conectar-se</span> comigo
          </p>

          <ul className={styles.homeAboutSocialLinks}>
            {socialLinks.map(({ icon, url, label }, index) => (
              <li key={index} className={styles.socialIcons}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.iconColour} ${styles.homeSocialIcons}`}
                  aria-label={label}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Home2;
