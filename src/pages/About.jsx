import { useState } from 'react'
import './About.css'

const skills = [
  {
    title: 'Diseño UI/UX',
    content:
      'Especializada en sistemas de diseño escalables, prototipado de alta fidelidad y flujos de usuario optimizados para conversión. Domino Figma, Adobe Creative Suite y principios de accesibilidad WCAG.',
  },
  {
    title: 'Estrategia de Marca',
    content:
      'Desarrollo de identidad visual, guías de estilo y sistemas de comunicación coherentes para marcas digitales.',
  },
  {
    title: 'Desarrollo Frontend (Low-code)',
    content:
      'Implementación de diseños responsivos con HTML, CSS y JavaScript. Experiencia con React, Webflow y Framer.',
  },
]

const tools = ['Figma', 'Framer', 'Webflow', 'After Effects']

const education = [
  {
    title: 'Máster en Diseño de Interacción',
    institution: 'ESNE - Madrid, España | 2021',
    description: 'Especialización en interfaces gestuales y diseño centrado en el humano.',
    primary: true,
  },
  {
    title: 'Grado en Comunicación Visual',
    institution: 'Universidad de Buenos Aires | 2018',
    description: 'Fundamentos estéticos, tipografía editorial y semiótica de la imagen.',
    primary: false,
  },
]

function About() {
  const [openSkill, setOpenSkill] = useState(0)

  return (
    <div className="about page">
      <div className="container">
        {/* ── Hero ── */}
        <section className="about__hero">
          <div className="about__hero-content">
            <h1 className="about__title">
              Creando Experiencias Digitales.
            </h1>
            <p className="about__desc">
              Diseñadora Visual enfocada en la intersección entre la funcionalidad
              técnica y la estética editorial. Transformo conceptos complejos en
              interfaces intuitivas que respiran.
            </p>
            <div className="about__cta-row">
              <a href="mailto:contacto@vanesavasquez.com" className="btn btn--outline">
                ✉ Email Me
              </a>
              <a href="https://linkedin.com/" className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                ↗ LinkedIn
              </a>
              <a href="/cv.pdf" className="btn btn--primary" download>
                ↓ Descargar CV
              </a>
            </div>
          </div>

          <div className="about__portrait">
            <div className="about__portrait-img">
              Foto retrato profesional
            </div>
            <div className="about__note">
              <div className="about__note-icon">💡</div>
              <div className="about__note-title">Valor:</div>
              <div className="about__note-text">Claridad sobre ruido.</div>
            </div>
          </div>
        </section>

        {/* ── Skills + Sidebar ── */}
        <section className="about__skills">
          <div className="about__skills-left">
            <h2 className="about__skills-title">Habilidades</h2>

            <div className="accordion">
              {skills.map((skill, i) => (
                <div
                  key={skill.title}
                  className={`accordion__item${openSkill === i ? ' accordion__item--open' : ''}`}
                >
                  <button
                    className="accordion__header"
                    onClick={() => setOpenSkill(openSkill === i ? -1 : i)}
                  >
                    {skill.title}
                    <span className="accordion__toggle">+</span>
                  </button>
                  <div className="accordion__body">
                    <div className="accordion__content">{skill.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__sidebar-cards">
            {/* Philosophy card */}
            <div className="about__sidebar-card about__sidebar-card--philosophy">
              <div className="about__sidebar-card-title">Mi Filosofía</div>
              <p className="about__philosophy-quote">
                "El diseño no es lo que parece o lo que se siente. El diseño es cómo funciona."
              </p>
            </div>

            {/* Tools card */}
            <div className="about__sidebar-card">
              <div className="about__sidebar-card-title">Tools</div>
              <div className="about__tools-list">
                {tools.map(tool => (
                  <span key={tool} className="tag">{tool}</span>
                ))}
              </div>
            </div>

            {/* Location card */}
            <div className="about__sidebar-card">
              <div className="about__sidebar-card-title">Metadata // Localización</div>
              <div className="about__location">
                <div className="about__location-icon">📍</div>
                <div className="about__location-info">
                  <h4>Remoto / Global</h4>
                  <p>Disponible para nuevos proyectos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Education ── */}
        <section className="about__education">
          <h2 className="about__education-title">Formación</h2>

          <div className="education-list">
            {education.map(edu => (
              <div key={edu.title} className="education-item">
                <div className={`education-item__dot${!edu.primary ? ' education-item__dot--secondary' : ''}`}></div>
                <div className="education-item__content">
                  <h3>{edu.title}</h3>
                  <div className="education-item__meta">{edu.institution}</div>
                  <p className="education-item__desc">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
