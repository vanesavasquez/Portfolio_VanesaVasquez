import { Link } from 'react-router-dom'
import './Experience.css'

const experiences = [
  {
    number: '01',
    company: 'Studio Lumina',
    role: 'Senior UI Designer',
    period: 'Ene 2022 — Presente',
    description:
      'Liderando el diseño de interfaces para plataformas SaaS de alta escala, enfocándome en sistemas de diseño modulares y experiencias de usuario fluidas.',
    images: ['Proyecto Dashboard', 'Safe Work App'],
  },
  {
    number: '02',
    company: 'Nova Creative',
    role: 'Product Designer',
    period: 'Mar 2019 — Dic 2021',
    description:
      'Desarrollo de conceptos visuales y prototipado interactivo para clientes internacionales del sector fintech y e-commerce de lujo.',
    images: ['Concepto Visual', 'Arquitectura'],
  },
  {
    number: '03',
    company: 'Pixel Bloom',
    role: 'Junior UI/UX Designer',
    period: 'Jul 2017 — Feb 2019',
    description:
      'Primeros pasos en el mundo digital, colaborando en el rediseño de sitios web corporativos y creación de activos para redes sociales.',
    images: ['Web Redesign', 'Social Assets'],
  },
]

function Experience() {
  return (
    <div className="experience page">
      <div className="container">
        {/* ── Header ── */}
        <div className="experience__header">
          <div className="experience__header-content">
            <h1 className="experience__title">Experiencias</h1>
            <p className="experience__subtitle">
              Un recorrido por las marcas y agencias que han confiado en mi visión
              creativa para elevar sus productos digitales.
            </p>
          </div>

          <div className="experience__status">
            <div className="experience__status-label">Status</div>
            <div className="experience__status-text">
              Disponible para nuevos desafíos freelance.
            </div>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.number} className="timeline__item">
              <div className="timeline__info">
                <span className="timeline__number">{exp.number}</span>
                <h2 className="timeline__company">{exp.company}</h2>
                <span className="timeline__role">{exp.role}</span>
                <span className="timeline__period">{exp.period}</span>
                <p className="timeline__desc">{exp.description}</p>
              </div>

              <div className="timeline__images">
                {exp.images.map(img => (
                  <div key={img} className="timeline__image-placeholder">
                    {img}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA Section ── */}
        <div className="experience__cta">
          <div className="experience__cta-bg"></div>
          <h2 className="experience__cta-title">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="experience__cta-text">
            Mi proceso combina estrategia visual con ejecución técnica impecable.
            Hablemos sobre cómo puedo ayudar a tu equipo.
          </p>
          <div className="experience__cta-buttons">
            <a href="mailto:contacto@vanesavasquez.com" className="btn btn--primary">
              Contactar
            </a>
            <Link to="/proyectos" className="btn btn--outline">
              Ver Portafolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
