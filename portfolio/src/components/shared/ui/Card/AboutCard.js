import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import styles from "../../styles/AboutCard.module.css"; 

function AboutCard() {
  return (
    <Card className={styles.quoteCardView}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, sou <span className={styles.purple}>Edvaldo Vitor </span>
            de <span className={styles.purple}>Recife, Brasil.</span>
            <br />
            Atualmente, atuo como Software Engineer na Expedit.
            <br />
            Concluí Analista e Desenvolvedor de Sistemas na Uninassau.
            <br />
            <br />
            Além de programar, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className={styles.aboutActivity}>
              <ImPointRight /> Explorar novas tecnologias
            </li>
            <li className={styles.aboutActivity}>
              <ImPointRight /> Olhar para as estrelas no céu
            </li>
            <li className={styles.aboutActivity}>
              <ImPointRight /> Ler livros
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Não crie por criar — crie para transformar!"
          </p>
          <footer className="blockquote-footer">Edvaldo Vitor</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
