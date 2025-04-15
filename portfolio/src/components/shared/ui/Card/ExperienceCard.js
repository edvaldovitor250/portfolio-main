import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/ExperienceCard.module.css";

const ExperienceCard = ({ exp }) => {
  const isLeft = exp.position === "left";

  return (
    <Row
      className={`mb-5 align-items-center ${
        isLeft ? "justify-content-end" : "justify-content-start"
      }`}
    >
      <Col md={5} className="text-center">
        <div className={`${styles.cardExperience} p-4 rounded-4 shadow position-relative`}>
          <div className="d-flex align-items-start mb-3" style={{ justifyContent: "space-between" }}>
            <div className="text-start">
              <h5 className="purple mb-1 d-flex align-items-center">
                {exp.company}
                <span className={styles.badge}>{exp.period}</span>
              </h5>
              <h6 className="resume-title mb-0">{exp.role}</h6>
            </div>

            <div className={styles.logoContainer}>
              <img
                src={exp.logo}
                alt={exp.company}
                className={styles.companyLogo}
              />
            </div>
          </div>

          <p className={styles.description}>{exp.description}</p>

          <div className={styles.techStack}>
            {exp.tools.map((ToolIcon, i) => (
              <ToolIcon
                key={i}
                title="Ferramenta utilizada"
                className="tech-icons me-3"
                style={{ fontSize: "0.26rem", color: "#c770f0" }}
              />
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ExperienceCard;
