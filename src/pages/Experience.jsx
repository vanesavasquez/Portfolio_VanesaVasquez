import { useLanguage } from '../hooks/useLanguage.js'
import { translations } from '../i18n/translations.js'
import './Experience.css'

const experienceMeta = [
  { logo: '/images/logo_tecnosoftware.png', clients: ['Laboratorio Bagó CRM', 'Life Seguros', 'Worldsys'] },
  { logo: '/images/logo_habito 1.svg', clients: ['Disprofarma', 'Roche'] },
  { logo: '/images/logo-agencia-agatiello.png', clients: ['MAPFRE TeCuidamos', 'Hospital Italiano', 'CaroCuore', 'HEALIGHT', 'Ministerio de Ambiente y Desarrollo Sustentable Argentina'] },
  { logo: '/images/Mar-del-Plata-Digital-logo.png', clients: ['Bennice', 'Artemedica', 'Hotel Las Rocas', 'Altos Medanos'] },
  { logo: '/images/Logo _ Rubra_eventos.png', clients: [] },
  { logo: '/images/mol-logo-2023.webp', clients: [] },
  { logo: '/images/logo _Workana.png', workanaLink: 'https://www.workana.com/freelancer/38891cf7d203722edc9a011ddd752b9e', clients: [] },
  { logo: '/images/logo_pulso.jpg', clients: [] },
]

function Experience() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const experiences = t.experience.items.map((item, i) => ({
    ...item,
    logo: experienceMeta[i].logo,
    clients: experienceMeta[i].clients,
    workanaLink: experienceMeta[i].workanaLink,
  }))

  return (
    <div className="experience page">
      <div className="container">
        {/* ── Header ── */}
        <div className="experience__header">
          <div className="experience__header-content">
            <h1 className="experience__title">{t.experience.title}</h1>
            <p className="experience__subtitle">
              {t.experience.subtitle}
            </p>
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
                <p className="timeline__desc">
                  {exp.description}
                  {exp.workanaLink && (
                    <>
                      {' '}
                      <a 
                        href={exp.workanaLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="timeline__workana-link"
                      >
                        {t.experience.viewWorkana}
                      </a>
                    </>
                  )}
                </p>
                
                {/* ── Clients badges ── */}
                {exp.clients && exp.clients.length > 0 && (
                  <div className="timeline__clients">
                    {exp.clients.map((client, index) => (
                      <span key={index} className="timeline__client-badge">
                        {client}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="timeline__logo">
                <img src={exp.logo} alt={`Logo de ${exp.company}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
