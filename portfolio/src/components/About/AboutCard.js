import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Olá a todos, sou <span className="purple">Edvaldo Vitor </span>
                        de <span className="purple"> Recife, Brasil.</span>
                        <br />
                        Atualmente, atuo como Software Engineer na Expedit Lawtech.
                        <br />
                        Concluí Analista e desenvolvedor de Sistema na Uninassau.
                        <br />
                        <br />
                        Além de programar, algumas outras atividades que adoro fazer!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Explorar novas tecnologias
                        </li>
                        <li className="about-activity">
                            <ImPointRight />Olhar para as estrelas no céu 
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Ler livros
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Não crie por criar — crie para transformar!"{" "}
                    </p>
                    <footer className="blockquote-footer">Edvaldo Vitor</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;