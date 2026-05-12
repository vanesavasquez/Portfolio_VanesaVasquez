import './Resume.css'

const skills = [
  { name: 'Figma', highlight: true, desc: 'Diseño de interfaces, prototipado avanzado y sistemas de diseño escalables.' },
  { name: 'UX Research', highlight: true, desc: 'Investigación cualitativa y cuantitativa, entrevistas, testing de usabilidad.' },
  { name: 'UI Design', highlight: true, desc: 'Interfaces visuales coherentes, accesibles y centradas en el usuario.' },
  { name: 'Design Systems', highlight: false, desc: 'Creación y mantenimiento de bibliotecas de componentes reutilizables.' },
  { name: 'Prototyping', highlight: false, desc: 'Prototipos de alta fidelidad para validación de flujos y conceptos.' },
  { name: 'Wireframing', highlight: false, desc: 'Estructuras de baja fidelidad para definir arquitectura de información.' },
  { name: 'Usability Testing', highlight: false, desc: 'Evaluación heurística y testing con usuarios reales.' },
  { name: 'Adobe Creative Suite', highlight: false, desc: 'Photoshop, Illustrator y After Effects para assets visuales.' },
  { name: 'HTML / CSS', highlight: false, desc: 'Implementación frontend de diseños responsivos y accesibles.' },
  { name: 'React', highlight: false, desc: 'Desarrollo de componentes y prototipos funcionales en React.' },
  { name: 'Webflow', highlight: false, desc: 'Construcción de sitios web sin código con animaciones avanzadas.' },
  { name: 'Framer', highlight: false, desc: 'Prototipado interactivo con micro-interacciones complejas.' },
  { name: 'After Effects', highlight: false, desc: 'Motion graphics y animaciones para productos digitales.' },
  { name: 'Accesibilidad WCAG', highlight: false, desc: 'Cumplimiento de estándares de accesibilidad web.' },
]

const experience = [
  {
    period: 'Ene 2022 — Presente',
    company: 'Studio Lumina',
    role: 'Senior UI Designer',
    description:
      'Liderando el diseño de interfaces para plataformas SaaS de alta escala, enfocándome en sistemas de diseño modulares y experiencias de usuario fluidas.',
  },
  {
    period: 'Mar 2019 — Dic 2021',
    company: 'Nova Creative',
    role: 'Product Designer',
    description:
      'Desarrollo de conceptos visuales y prototipado interactivo para clientes internacionales del sector fintech y e-commerce de lujo.',
  },
  {
    period: 'Jul 2017 — Feb 2019',
    company: 'Pixel Bloom',
    role: 'Junior UI/UX Designer',
    description:
      'Primeros pasos en el mundo digital, colaborando en el rediseño de sitios web corporativos y creación de activos para redes sociales.',
  },
]

const educationList = [
  {
    year: '2021',
    title: 'Máster en Diseño de Interacción',
    institution: 'ESNE - Madrid, España',
    description: 'Especialización en interfaces gestuales y diseño centrado en el humano.',
  },
  {
    year: '2018',
    title: 'Grado en Comunicación Visual',
    institution: 'Universidad de Buenos Aires',
    description: 'Fundamentos estéticos, tipografía editorial y semiótica de la imagen.',
  },
]

function Resume() {
  return (
    <div className="resume page">
      <div className="container container--narrow">
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
              href="/cv.pdf"
              className="btn btn--primary resume__download-btn"
              download
            >
              ↓ Descargar CV en PDF
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
              <span className="resume__language-level">Intermedio (B1)</span>
            </div>
          </div>
        </section>

        {/* ── Contact footer ── */}
        <div className="resume__footer-bar">
          <div className="resume__contact-links">
            <a href="mailto:contacto@vanesavasquez.com" className="resume__contact-link">
              ✉ Email
            </a>
            <a href="https://linkedin.com/" className="resume__contact-link" target="_blank" rel="noopener noreferrer">
              in LinkedIn
            </a>
            <a href="https://github.com/vanesavasquez" className="resume__contact-link" target="_blank" rel="noopener noreferrer">
              GH GitHub
            </a>
          </div>
          <a
            href="/cv.pdf"
            className="btn btn--outline btn--sm"
            download
          >
            ↓ Descargar PDF
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resume
