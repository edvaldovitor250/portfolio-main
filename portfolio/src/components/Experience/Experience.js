import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSpringboot,
  SiMysql,
  SiGit,
} from "react-icons/si";

function Experience() {
  return (
    <section className="resume-section">
      <Container>
        {/* Título da seção */}
        <h2 className="project-heading text-center">
          Minhas <strong className="purple">Experiências Profissionais</strong>
        </h2>

        <Row className="resume justify-content-center">
          <Col md={8} className="text-center">
            {/* Expedit Lawtech */}
            <div className="resume-item">
              <img
                src="/Assets/expedit-logo.png"
                alt="Expedit Lawtech"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
              <h5 className="purple">Expedit Lawtech</h5>
              <h6 className="resume-title">
                Software Engineer{" "}
                <span
                  style={{
                    backgroundColor: "#c770f0",
                    color: "white",
                    borderRadius: "12px",
                    padding: "2px 10px",
                    marginLeft: "8px",
                    fontSize: "0.8rem",
                    display: "inline-block",
                  }}
                >
                  Jan 2023 — Presente
                </span>
              </h6>
              <ul style={{ display: "inline-block", textAlign: "left" }}>
                <li>
                  Atuação como desenvolvedor de software, criando soluções inovadoras para o setor jurídico.
                </li>
                <li>
                  Foco em performance, escalabilidade e integração de sistemas complexos.
                </li>
              </ul>
              {/* Ícones em linha */}
              <div className="experience-stack mt-3 d-flex justify-content-center align-items-center flex-wrap">
                <SiSpringboot title="Spring Boot" className="tech-icons me-3" />
                <SiMysql title="MySQL" className="tech-icons me-3" />
                <SiGit title="Git" className="tech-icons me-3" />
                <SiVisualstudiocode title="VSCode" className="tech-icons" />
              </div>
            </div>

            {/* Freelancer */}
            <div className="resume-item mt-5">
              <img
                src="/Assets/freelancer-logo.png"
                alt="Freelancer"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
              <h5 className="purple">Freelancer</h5>
              <h6 className="resume-title">
                Full Stack Developer{" "}
                <span
                  style={{
                    backgroundColor: "#c770f0",
                    color: "white",
                    borderRadius: "12px",
                    padding: "2px 10px",
                    marginLeft: "8px",
                    fontSize: "0.8rem",
                    display: "inline-block",
                  }}
                >
                  2022 — 2023
                </span>
              </h6>
              <ul style={{ display: "inline-block", textAlign: "left" }}>
                <li>
                  Desenvolvimento de aplicações web e APIs personalizadas para diferentes clientes.
                </li>
                <li>
                  Integração de sistemas e entrega de soluções sob medida.
                </li>
              </ul>
              {/* Ícones em linha */}
              <div className="experience-stack mt-3 d-flex justify-content-center align-items-center flex-wrap">
                <SiSpringboot title="Spring Boot" className="tech-icons me-3" />
                <SiMysql title="MySQL" className="tech-icons me-3" />
                <SiGit title="Git" className="tech-icons me-3" />
                <SiVisualstudiocode title="VSCode" className="tech-icons" />
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
