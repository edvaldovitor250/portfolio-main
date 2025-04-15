import scannerPython from "../Assets/Projects/scannerpython.jpg";
import captchaAudio from "../Assets/Projects/captcha-audio.png";
import br from "../Assets/Projects/rr.png";
import captchaImagem from "../Assets/Projects/captcha-imagem.jpg";
import javascriptNote from "../Assets/Projects/javascrpit-note.png";
import toDoList from "../Assets/Projects/to-do-list.png";

const projectList = [
  {
    imgPath: captchaAudio,
    isBlog: false,
    title: "Captcha áudio em Java",
    description:
      "Automação avançada para resolver CAPTCHAs de áudio e detecção de objetos em imagens usando Java, Selenium, Vosk, FFmpeg e YOLOv4, com reconhecimento offline e integração inteligente de modelos.",
  },
  {
    imgPath: br,
    isBlog: false,
    title: "Brasileirão API",
    description:
      "Automação para captar dados de partidas em tempo real usando Spring Boot e Jsoup, atualizando gols, pênaltis e cartões em banco de dados e expondo via API RESTful documentada com Swagger.",
    ghLink: "https://github.com/edvaldovitor250/brasileirao-api/tree/master",
  },
  {
    imgPath: captchaImagem,
    isBlog: false,
    title: "Captcha imagem em Python",
    description:
      "Automação avançada para resolver CAPTCHAs de imagem usando Python, Selenium, OpenCV e Tesseract OCR, com reconhecimento offline e integração inteligente de modelos.",
  },
  {
    imgPath: scannerPython,
    isBlog: false,
    title: "Wi-Fi Network Scanner",
    description:
      "Scanner de rede Wi-Fi com Flask e Nmap, inclui login fixo, visual moderno e detecção de dispositivos e seus sistemas operacionais.",
    ghLink: "https://github.com/edvaldovitor250/scanner-wifi",
  },
  {
    imgPath: javascriptNote,
    isBlog: false,
    title: "JavaScript Note",
    description:
      "Aplicação React conectada à API 'Javascript Note API' para criar, editar e excluir notas com segurança, usando criptografia e autenticação de usuários, com design em SCSS e integração completa backend.",
    ghLink: "https://github.com/edvaldovitor250/javascript_note",
  },
  {
    imgPath: toDoList,
    isBlog: false,
    title: "To Do List",
    description:
      "Aplicação To Do List com Node.js e MongoDB para criar, editar e excluir tarefas, com filtros por status, interface amigável e backend Express para organizar atividades diárias.",
    ghLink: "https://github.com/edvaldovitor250/to-do-list",
    demoLink: "https://to-do-list-murex-xi.vercel.app",
  },
];

export default projectList;
