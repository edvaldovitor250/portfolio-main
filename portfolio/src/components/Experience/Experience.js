import React from "react";
import { Container } from "react-bootstrap";
import experiences from "../../data/experiences";
import ExperienceCard from "./ExperienceCard";
import styles from "./Experience.module.css";

const Experience = () => (
  <section className="resume-section">
    <Container>
      <h2 className="project-heading text-center mb-5">
        Minhas <strong className="purple">Experiências Profissionais</strong>
      </h2>

      <div className={styles.timelineContainer}>
        {/* Linha da timeline */}
        <div className={styles.timelineLine}></div>

        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </Container>
  </section>
);

export default Experience;
