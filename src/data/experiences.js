import { DiJava } from "react-icons/di";
import {
  SiSpringboot,
  SiMysql,
  SiVisualstudiocode,
  SiRedis,
  SiMongodb,
  SiReact,
  SiPython,
  SiSonarqube,
} from "react-icons/si";

import logoExpedit from "../Assets/logo-empresas/mascoteExpedit.png";
import logoKwai from "../Assets/logo-empresas/logo-kwai-icon.png";
import logoAge from "../Assets/logo-empresas/logo-age-consulting.jpg";

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

export default experiences;
