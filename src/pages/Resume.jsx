import './Resume.css'

const skills = [
  { name: 'Diseño & Prototipado', highlight: false, desc: 'Figma (Avanzado: Variables, Auto-layout), FigJam, Miro, Adobe Creative Suite, UXcel, Framer, Canva.' },
  { name: 'Investigación UX', highlight: false, desc: 'User Interviews, Usability Testing (Moderated/Unmoderated), Surveys, Card Sorting, Tree Testing, Desk Research. Useberry, Bullpark, SurveyMonkey, TypeForm, Google Forms. investigación Maze, Proto. Google Analytics y Clarity.' },
  { name: 'Técnicas', highlight: false, desc: 'Sistemas de Diseño (Atomic Design), Arquitectura de la Información, perfiles de usuarios, Flujo de usuario, Sitemap, Flujo de navegación, Journey Map, Diseño de interacciones, Accesibilidad (WCAG), Metodologías Ágiles (Scrum/Jira), Heuristic Evaluation, Metodología mobile-first.' },
  { name: 'Desarrollo', highlight: false, desc: 'HTML, CSS, Bootstrap, React, JS, PHP, SQL, WordPress, Shopify, SEO. Visual Studio Code, OpenCode, Antigravity, Android Studio para implementación de proyectos.' },
  { name: 'Discovery y Research (IA)', highlight: false, desc: 'Análisis de documentación y evaluaciones heurísticas; creación de agentes de investigación, laboratorio y Test de usuarios con "Agentes". Pruebas de concepto en OpenCode.' },
  { name: 'Prototipado y Desarrollo (IA)', highlight: false, desc: 'Asistencia en desarrollo web e integración en Figma con Claude Code; prototipado/laboratorio rápido de diseños con V0.' },
  { name: 'UX Writing (IA)', highlight: false, desc: 'Generación de contenido y agentes de redacción utilizando Gemini (Gems) y ChatGPT.' },
]

const experience = [
  {
    period: 'Septiembre 2022 — Actualidad',
    company: 'Laboratorios Bagó (Consultora Be Proactive/Tecnosoftware)',
    role: 'Senior UX/UI Designer',
    description:
      'Investigación mixta (cualitativa/cuantitativa), pruebas de usabilidad moderadas y no moderadas, entrevistas en profundidad. Análisis de comportamiento con Microsoft Clarity. Diseño integral en Figma para plataformas web y móvil del CRM comercial. Auditoría UI y migración de sistemas a Angular/Flutter. Colaboración con equipos de ingeniería. Documentación y sistematización de componentes.',
  },
  {
    period: 'Junio 2022 — Agosto 2022',
    company: 'Disprofarma (Consultora Be Proactive)',
    role: 'UX/UI Designer',
    description:
      'Rediseño de flujos transaccionales y seguimiento de pedidos en e-commerce B2B de alta complejidad logística. Simplificación de navegación y arquitectura de información para autogestión de clientes (farmacias y droguerías).',
  },
  {
    period: 'Enero 2019 — Junio 2022',
    company: 'Consultora UX/UI & Frontend Developer (Freelance)',
    role: 'UX/UI Designer & Frontend Developer',
    description:
      'Diseño e implementación de tiendas online (WooCommerce/Tienda Nube) enfocadas en conversión. Ejecución completa del ciclo de vida: relevamiento, branding, desarrollo Frontend (HTML/CSS/JS) y lanzamiento. Clientes: Mapfre Seguros, Rubra Eventos, Hospital Italiano, Life Seguros, entre otros.',
  },
]

const educationList = [
  {
    year: 'En curso',
    title: 'Tecnicatura en Diseño de Apps Mobile',
    institution: 'UNNOBA',
    description: 'Trabajo final en desarrollo.',
  },
  {
    year: '2019',
    title: 'Diplomatura en Programación Full Stack (React.js)',
    institution: 'UTN FRBA',
    description: '',
  },
  {
    year: '2019',
    title: 'Tecnicatura en Diseño Web',
    institution: 'Universidad Nacional de San Luis',
    description: '',
  },
  {
    year: 'Certificación',
    title: 'Diseño de Producto y UX',
    institution: 'Academia Platzi',
    description: '',
  },
  {
    year: 'Certificación',
    title: 'Curso de Pruebas de Usabilidad',
    institution: 'Platzi',
    description: '',
  },
  {
    year: 'Certificación',
    title: 'Curso de Investigación de Usuarios: Estudios Prácticos',
    institution: 'Platzi',
    description: '',
  },
  {
    year: 'Certificación',
    title: 'Curso de User Research: Técnicas para una Investigación Efectiva',
    institution: 'Platzi',
    description: '',
  },
  {
    year: 'Certificación',
    title: 'Curso diseño centrado en el usuario',
    institution: 'Platzi',
    description: '',
  },
  {
    year: 'Certificación',
    title: 'Curso de audiocápsulas de casos e historias',
    institution: 'Platzi',
    description: '',
  },
  {
    year: 'Certificación',
    title: 'Curso de inglés (Nivel 7)',
    institution: 'CUI, UBA',
    description: '',
  },
  {
    year: 'Certificación',
    title: 'Curso Intensivo de inglés',
    institution: 'CUI, UBA',
    description: '',
  },
]

function Resume() {
  return (
    <div className="resume page">
      <div className="container">
        {/* ── Header ── */}
        <div className="resume__header">
          <div className="resume__header-left">
            <h1 className="resume__name">Vanesa A. Ledesma Vasquez</h1>
            <div className="resume__roles">
              UX Designer | UX Research | Front-end | Product Designer | Web Development
            </div>
            <p className="resume__intro">
              Especialista en UX con más de 5 años de experiencia transformando datos en
              decisiones de producto. Experta en liderar procesos de Discovery y validación
              en entornos complejos (B2B, B2E). Domina metodologías cualitativas y
              cuantitativas (lean UX) para crear experiencias centradas en el usuario.
              Habilidad para orquestar procesos de research y creativos, buena comunicadora
              con equipo de ingeniería.
            </p>
            <a
              href="/docs/cv/CV_LedesmaVanesa_UXUIdesigner-2.pdf"
              className="btn btn--primary resume__download-btn"
              download
            >
              ↓ Descargar CV
            </a>
          </div>

          <div className="resume__photo">
            <img
              src="/images/imagen-perfil-vanesa-vasquez-byn.png"
              alt="Vanesa Vasquez"
              className="resume__photo-img"
            />
          </div>
        </div>

        {/* ── Skills ── */}
        <section className="resume__section">
          <h2 className="resume__section-title">Skills</h2>
          <div className="resume__skills-grid">
            {skills.map(skill => (
              <div
                key={skill.name}
                className={`resume__skill-card${skill.highlight ? ' resume__skill-card--highlight' : ''}`}
              >
                <span className="resume__skill-name">{skill.name}</span>
                <p className="resume__skill-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="resume__section">
          <h2 className="resume__section-title">Experiencia Profesional</h2>
          <div className="resume__entries">
            {experience.map(exp => (
              <div key={exp.company} className="resume__entry">
                <span className="resume__entry-period">{exp.period}</span>
                <div>
                  <div className="resume__entry-company">{exp.company}</div>
                  <div className="resume__entry-role">{exp.role}</div>
                  <p className="resume__entry-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section className="resume__section">
          <h2 className="resume__section-title">Educación</h2>

          <div className="resume__edu-entries">
            {educationList.map(edu => (
              <div key={edu.title} className="resume__edu-entry">
                <span className="resume__edu-year">{edu.year}</span>
                <div>
                  <div className="resume__edu-title">{edu.title}</div>
                  <div className="resume__edu-institution">{edu.institution}</div>
                  <p className="resume__edu-desc">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Languages ── */}
        <section className="resume__section">
          <h2 className="resume__section-title">Idiomas</h2>
          <div className="resume__languages">
            <div className="resume__language">
              <span className="resume__language-name">Español</span>
              <span className="resume__language-level">Nativo</span>
            </div>
            <div className="resume__language">
              <span className="resume__language-name">Inglés</span>
              <span className="resume__language-level">Nivel 7 (CUI, UBA)</span>
            </div>
          </div>
        </section>

        {/* ── Contact footer ── */}
        <div className="resume__footer-bar">
          <div className="resume__contact-links">
            <a href="mailto:contacto@vanesavasquez.com" className="resume__contact-link">
              ✉ Email
            </a>
            <a href="https://www.linkedin.com/in/vanesa-vasquez/" className="resume__contact-link" target="_blank" rel="noopener noreferrer">
              in LinkedIn
            </a>
            <a href="https://github.com/vanesavasquez" className="resume__contact-link" target="_blank" rel="noopener noreferrer">
              GH GitHub
            </a>
          </div>
          <a
            href="/docs/cv/CV_LedesmaVanesa_UXUIdesigner-2.pdf"
            className="btn btn--outline btn--sm"
            download
          >
            ↓ Descargar CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resume
