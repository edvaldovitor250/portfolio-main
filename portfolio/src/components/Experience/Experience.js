import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiSpringboot,
  SiMysql,
  SiGit,
  SiVisualstudiocode,
  SiRedis,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

import logoExpedit from "../../Assets/logo-empresas/mascoteExpedit.png";

function Experience() {
  const experiences = [
    {
      company: "Expedit Lawtech",
      logo: logoExpedit,
      role: "Desenvolvedor Júnior - Back-end",
      description:
        "Responsável pelo desenvolvimento e manutenção da API central do sistema de gestão jurídica da Expedit, focando em escalabilidade, integrações eficientes e melhoria contínua das funcionalidades voltadas para escritórios de advocacia e departamentos jurídicos corporativos.",
      tools: [DiJava, SiSpringboot, SiMysql, SiRedis],
      period: "02/2024 - Atualmente",
      position: "left",
    },
    {
      company: "Google Cloud Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
      role: "Engenheiro de Dados - Estágio",
      description:
        "Atuação em projetos de dados na nuvem, construindo pipelines de ETL eficientes, automatizando processos e garantindo qualidade na entrega de dados para ambientes produtivos e analíticos, com integração de múltiplas fontes utilizando Google Cloud Platform.",
      tools: [SiGit, SiMysql, SiSpringboot],
      period: "11/2023 - 04/2024",
      position: "right",
    },
    {
      company: "Banco Digital Neon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Neon_logo.png",
      role: "Desenvolvedor Back-end - Freelancer",
      description:
        "Desenvolvimento de microserviços e integrações para facilitar operações bancárias como emissão de boletos e reconciliação financeira, utilizando arquitetura orientada a eventos e garantindo alta disponibilidade dos serviços financeiros do banco digital.",
      tools: [DiJava, SiVisualstudiocode],
      period: "10/2023 - 11/2023",
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
                className={`mb-5 align-items-center ${
                  isLeft ? "justify-content-end" : "justify-content-start"
                }`}
              >
                <Col md={5} className="text-center">
                  {/* Card da experiência */}
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
                    {/* Cabeçalho */}
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
                              fontSize: "0.75rem", // ⬅️ Tamanho maior
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

                    {/* Descrição */}
                    <p
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        marginBottom: "15px",
                      }}
                    >
                      {exp.description}
                    </p>

                    {/* Ferramentas */}
                    <div className="experience-stack mt-3 d-flex justify-content-center align-items-center flex-wrap">
                      {exp.tools.map((ToolIcon, i) => (
                        <ToolIcon
                          key={i}
                          title="Ferramenta utilizada"
                          className="tech-icons me-3"
                          style={{
                            fontSize: "0.95rem",
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
