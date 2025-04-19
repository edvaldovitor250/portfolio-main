<body>
  <main>
    <h1>📘 Documentação do Portfólio Pessoal - Edvaldo Vitor</h1>
    <section>
      <h2>📁 Estrutura de Arquitetura</h2>
      <pre>
📦src
 ┣ 📂Assets
 ┃ ┗ Imagens, logos e currículo
 ┣ 📂components
 ┃ ┗ Componentes reutilizáveis organizados por função (Home, About, Projects etc.)
 ┣ 📂data
 ┃ ┗ Arquivos com listas de dados para navegação, experiências e tecnologias
 ┣ 📂hooks
 ┃ ┗ Hooks customizados (ex: preloader, scroll)
 ┣ 📂pages
 ┃ ┗ Páginas principais renderizadas nas rotas (Home, About, Projects, Resume)
 ┣ 📜App.js
 ┗ 📜index.js
      </pre>
    </section>
    <section>
      <h2>🧠 Estrutura de Rotas (SPA)</h2>
      <p>A aplicação usa React Router DOM para navegação sem recarregar a página. As rotas implementadas são:</p>
      <ul>
        <li><code>/</code> – Página inicial (Home)</li>
        <li><code>/about</code> – Sobre mim (About)</li>
        <li><code>/experience</code> – Experiência profissional</li>
        <li><code>/project</code> – Projetos desenvolvidos</li>
        <li><code>/resume</code> – Currículo</li>
      </ul>
    </section>
    <section>
      <h2>🧩 Componentização</h2>
      <p>A estrutura é altamente modular. Cada seção da página é dividida em componentes reutilizáveis com seus próprios estilos CSS Modules:</p>
      <ul>
        <li><strong>NavBar</strong> – Barra de navegação.</li>
        <li><strong>Footer</strong> – Rodapé com informações sociais.</li>
        <li><strong>Preloader</strong> – Tela de carregamento inicial.</li>
        <li><strong>ScrollToTop</strong> – Componente de rolagem automática para o topo ao mudar de rota.</li>
        <li><strong>Cards</strong> – Cards reutilizáveis para projetos, experiências e informações pessoais.</li>
      </ul>
    </section>
    <section>
      <h2>🏠 Página Inicial (<code>Home</code>)</h2>
      <p>Esta é a tela de boas-vindas que utiliza um SVG personalizado (<code>home-main.svg</code>) com um avatar visual e fundo temático. Há também um efeito de digitação com a biblioteca <code>TypewriterEffect</code>, e textos introdutórios sobre mim.</p>
      <img src="https://github.com/user-attachments/assets/6de3aafb-a304-49de-8478-d4e09549b26e" alt="Home" width="100%" />
    </section>
    <section>
      <h2>📄 Sobre Mim (<code>About</code>)</h2>
      <p>Seção com informações pessoais, habilidades técnicas apresentadas com ícones do <a href="https://skillicons.dev">skillicons.dev</a>, e uma imagem ilustrativa.</p>
      <img src="https://github.com/user-attachments/assets/e60e1b85-65a5-4f4c-940f-3bbc4321e983" alt="Sobre Mim" width="100%" />
    </section>
    <section>
      <h2>💼 Experiência (<code>Experience</code>)</h2>
      <p>Card detalhado com as experiências profissionais, logos das empresas, cargos e descrição das atividades realizadas.</p>
      <img src="https://github.com/user-attachments/assets/c4526229-a4dc-46d9-84c6-25b026e47b0c" alt="Experiência" width="100%" />
    </section>
    <section>
      <h2>🚀 Projetos (<code>Projects</code>)</h2>
      <p>Galeria de projetos com imagens e descrições técnicas, como:</p>
      <ul>
        <li>To-Do List</li>
        <li>Scanner Python</li>
        <li>Captcha Resolver</li>
        <li>JavaScript Notes</li>
      </ul>
      <img src="https://github.com/user-attachments/assets/c5776490-e16b-4f11-a5ec-272a046ea53b" alt="Projetos" width="100%" />
    </section>
    <section>
      <h2>📄 Currículo (<code>Resume</code>)</h2>
      <p>Possui botão para download direto do currículo em PDF: <strong>EdvaldoVitorCV.pdf</strong></p>
      <img src="https://github.com/user-attachments/assets/ed3a3d4c-31dd-418f-ac98-ba92b52804b6" alt="Currículo" width="100%" />
    </section>
    <section>
      <h2>⚙️ Como Rodar o Projeto</h2>
      <ol>
        <li>Clone o repositório:
          <pre>git clone https://github.com/edvaldovitor250/portfolio-main</pre>
        </li>
        <li>Instale as dependências:
          <pre>npm install</pre>
        </li>
        <li>Execute o projeto localmente:
          <pre>npm start</pre>
        </li>
        <li>Abra no navegador:
          <pre>http://localhost:3000</pre>
        </li>
      </ol>
    </section>
    <hr>
    <h2 align="center">💻 Desenvolvedor</h2>
    <div align="center">
      <a href="https://github.com/edvaldovitor250">
        <img src="https://github.com/edvaldovitor250.png" width="170" alt="Edvaldo Vitor" /><br>
        <sub>Edvaldo Vitor</sub>
      </a>
    </div>
    <hr>
    <h2 align="center">🛠️ Tech Stack Utilizada</h2>
    <table align="center" width="1000px">
      <thead>
        <tr>
          <th><img src="https://skillicons.dev/icons?i=react" width=100px height=100px/></th>
          <th><img src="https://skillicons.dev/icons?i=js" width=100px height=100px/></th>
          <th><img src="https://skillicons.dev/icons?i=html" width=100px height=100px/></th>
          <th><img src="https://skillicons.dev/icons?i=css" width=100px height=100px/></th>
        </tr>
      </thead>
      <tbody align="center">
        <tr>
          <td>React.js</td>
          <td>JavaScript</td>
          <td>HTML5</td>
          <td>CSS Modules</td>
        </tr>
        <tr>
          <td>v18.2.0</td>
          <td>ES6+</td>
          <td>5.3</td>
          <td>Modules</td>
        </tr>
      </tbody>
    </table>
  </main>
</body>
