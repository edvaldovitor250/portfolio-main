import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME <span className="purple"> ME APRESENTAR </span>
            </h1>
            <p className="home-about-body">
              Sou apaixonado por programação e, ao longo da minha jornada,
              venho aprendendo cada vez mais sobre esse universo incrível.
              <br />
              <br />
              Domino linguagens como{" "}
              <i>
                <b className="purple">Java, JavaScript e Python</b>
              </i>
              , sempre buscando aprimorar meus conhecimentos.
              <br />
              <br />
              Tenho grande interesse em criar novas{" "}
              <i>
                <b className="purple">tecnologias e soluções web</b>
              </i>
              , além de explorar áreas relacionadas à{" "}
              <b className="purple">análise e tratamento de dados.</b>
              <br />
              <br />
              Sempre que possível, aplico minha paixão pelo desenvolvimento de
              produtos utilizando <b className="purple">Python</b> e{" "}
              <i>
                <b className="purple">frameworks e bibliotecas modernos</b>
              </i>
              , como também{" "}
              <i>
                <b className="purple">React.js e JavaScript.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRE-ME EM</h1>
            <p>
              Fique à vontade para <span className="purple">conectar-se</span> comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/edvaldovitor250"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:edvaldovitor250@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/edvaldo-vitor/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vitinh081"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
