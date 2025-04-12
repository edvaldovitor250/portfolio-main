import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import scannerPython from "../../Assets/Projects/scannerpython.jpg";
import captchaAudio from "../../Assets/Projects/captcha-audio.png";
import br from "../../Assets/Projects/rr.png";
import captchaImagem from "../../Assets/Projects/captcha-imagem.jpg";
import javascriptNote from "../../Assets/Projects/javascrpit-note.png";
import toToList from "../../Assets/Projects/to-do-list.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Meus <strong className="purple">Projetos</strong> Recentes
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos nos quais trabalhei recentemente.
                </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={captchaAudio}
              isBlog={false}
              title="Captcha audio em Java"
              description="Automação avançada para resolver CAPTCHAs de áudio e detecção de objetos em imagens usando Java, Selenium, Vosk, FFmpeg e YOLOv4, com reconhecimento offline e integração inteligente de modelos."
              //ghLink="https://github.com/soumyajit4419/Chatify"
            //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={br}
              isBlog={false}
              title="Brasileirão API"
              description="Automação para captar dados de partidas em tempo real usando Spring Boot e Jsoup, atualizando gols, pênaltis e cartões em banco de dados e expondo via API RESTful documentada com Swagger."
              ghLink="https://github.com/edvaldovitor250/brasileirao-api/tree/master"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={captchaImagem}
              isBlog={false}
              title=" Captcha imagem em Python"
              description="Automação avançada para resolver CAPTCHAs de imagem usando Python, Selenium, OpenCV e Tesseract OCR, com reconhecimento offline e integração inteligente de modelos."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scannerPython}
              isBlog={false}
              title="Wi-Fi Network Scanner"
              description="Scanner de rede Wi-Fi com Flask e Nmap, inclui login fixo, visual moderno e detecção de dispositivos e seus sistemas operacionais."
              ghLink="https://github.com/edvaldovitor250/scanner-wifi"
            //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={javascriptNote}
              isBlog={false}
              title="JavaScript Note"
              description="Aplicação React conectada à API 'Javascript Note API' para criar, editar e excluir notas com segurança, usando criptografia e autenticação de usuários, com design em SCSS e integração completa backend."
              ghLink="https://github.com/edvaldovitor250/javascript_note"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toToList}
              isBlog={false}
              title="To Do List"
              description="Aplicação To Do List com Node.js e MongoDB para criar, editar e excluir tarefas, com filtros por status, interface amigável e backend Express para organizar atividades diárias."
              ghLink="https://github.com/edvaldovitor250/to-do-list"
             demoLink="to-do-list-murex-xi.vercel.app"     
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;