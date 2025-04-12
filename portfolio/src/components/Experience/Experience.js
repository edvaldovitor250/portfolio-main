import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiSpringboot,
  SiMysql,
  SiGit,
  SiVisualstudiocode,
  SiRedis,
  SiMongodb,
  SiReact,
  SiPython,
  SiSonarqube
} from "react-icons/si";
import { DiJava } from "react-icons/di";

// Logos locais
import logoExpedit from "../../Assets/logo-empresas/mascoteExpedit.png";
import logoKwai from "../../Assets/logo-empresas/logo-kwai-icon.png";
import logoAge from "../../Assets/logo-empresas/logo-age-consulting.jpg";

function Experience() {
  const experiences = [
    {
      company: "Expedit Lawtech",
      logo: logoExpedit,
      role: "Desenvolvedor Back-end - Júnior",
      description:
        "Desenvolvimento de robôs de automação para extração e processamento de dados jurídicos, integração de APIs, tratamento de grandes volumes de dados e otimização de desempenho.",
        tools: [DiJava, SiSpringboot, SiMysql, SiRedis, SiPython, SiSonarqube],
        period: "11/2024 - Atual",
      position: "left",
    },
    {
      company: "Kwai Brasil",
      logo: logoKwai,
      role: "Desenvolvedor Full Stack - Freelancer",
      description:
        "Desenvolvimento de backend escalável e interfaces web, correções de bugs, integração de APIs, manutenção do Kwai Studio e participação ativa em squads ágeis (Scrum).",
      tools: [DiJava, SiSpringboot, SiMysql, SiMongodb, SiReact],
      period: "04/2024 - 08/2024",
      position: "right",
    },
    {
      company: "Age Consulting",
      logo: logoAge,
      role: "Desenvolvedor Java - Freelancer",
      description:
        "Criação de uma aplicação Java para otimização de pesquisas e exportação automatizada de dados para Excel, utilizando filtros inteligentes e integração com a API do Google Maps.",
      tools: [DiJava, SiVisualstudiocode, SiMysql],
      period: "02/2024 - 06/2024",
      position: "left",
    },
  ];

  return (
    <section className="resume-section">
      <Container>
        <h2 className="project-heading text-center mb-5">
          Minhas <strong className="purple">Experiências Profissionais</strong>
        </h2>

        <div className="position-relative">
          {/* Linha da timeline */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "0",
              width: "4px",
              height: "100%",
              background: "linear-gradient(to bottom, #c770f0, transparent)",
              transform: "translateX(-50%)",
              zIndex: "0",
            }}
          ></div>

          {experiences.map((exp, index) => {
            const isLeft = exp.position === "left";

            return (
              <Row
                key={index}
                className={`mb-5 align-items-center ${isLeft ? "justify-content-end" : "justify-content-start"
                  }`}
              >
                <Col md={5} className="text-center">
                  <div
                    className="p-4 rounded-4 shadow card-experience position-relative"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02))",
                      border: "1px solid rgba(199, 112, 240, 0.3)",
                      borderRadius: "15px",
                      transition: "all 0.3s ease",
                      zIndex: "1",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="d-flex align-items-start mb-3"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="text-start">
                        <h5 className="purple mb-1 d-flex align-items-center">
                          {exp.company}
                          <span
                            style={{
                              backgroundColor: "#c770f0",
                              padding: "3px 8px",
                              borderRadius: "6px",
                              fontSize: "0.75rem",
                              color: "white",
                              boxShadow: "0 1px 4px rgba(199, 112, 240, 0.5)",
                              fontWeight: "500",
                              marginLeft: "10px",
                              lineHeight: "1",
                            }}
                          >
                            {exp.period}
                          </span>
                        </h5>
                        <h6 className="resume-title mb-0">{exp.role}</h6>
                      </div>

                      <div
                        style={{
                          marginTop: "-8px",
                          marginLeft: "auto",
                          textAlign: "right",
                        }}
                      >
                        <div
                          style={{
                            width: "55px",
                            height: "55px",
                            backgroundColor: "rgba(255, 255, 255, 0.07)",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid rgba(199, 112, 240, 0.3)",
                            marginLeft: "auto",
                          }}
                        >
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            style={{
                              maxWidth: "80%",
                              maxHeight: "80%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "15px",
                      }}
                    >
                      {exp.description}
                    </p>

                    <div className="experience-stack mt-3 d-flex justify-content-center align-items-center flex-wrap">
                      {exp.tools.map((ToolIcon, i) => (
                        <ToolIcon
                          key={i}
                          title="Ferramenta utilizada"
                          className="tech-icons me-3"
                          style={{
                            fontSize: "0.26rem",
                            color: "#c770f0",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Experience;
