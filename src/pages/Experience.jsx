import './Experience.css'

const experiences = [
  {
    number: '01',
    company: 'Tecnosoftware (Laboratorios Bagó)',
    role: 'Ssr. UX Designer',
    period: 'Sep 2022 — Dic 2025',
    description:
      'Liderazgo en diseño y mejora de componentes para 5 productos digitales web y mobile. Investigación de usuarios, accesibilidad y trabajo en metodologías ágiles para asegurar experiencias fluidas.',
    logo: '/images/logo_tecnosoftware.png',
    clients: ['Laboratorio Bagó CRM', 'Life Seguros', 'Worldsys'],
  },
  {
    number: '02',
    company: 'Hábito 1',
    role: 'Diseñadora UX/UI',
    period: '2022',
    description:
      'Servicios de diseño de interfaces y experiencia de usuario para el sector de laboratorios. Gestión del flujo de trabajo mediante Asana y Clockify, y creación de wireframes estructurados en Figma.',
    logo: '/images/logo_habito 1.svg',
    clients: ['Disprofarma', 'Roche'],
  },
  {
    number: '03',
    company: 'Agencia Diego Agatiello',
    role: 'Desarrolladora Web y frontend',
    period: 'Mar 2021 — Sep 2022',
    description:
      'Maquetación web avanzada y desarrollo con herramientas personalizadas, gestionando proyectos corporativos como MAPFRE Argentina y estructurando campañas de Email Marketing.',
    logo: '/images/logo-agencia-agatiello.png',
    clients: ['MAPFRE TeCuidamos', 'Hospital Italiano', 'CaroCuore', 'HEALIGHT', 'Ministerio de Ambiente y Desarrollo Sustentable Argentina'],
  },
  {
    number: '04',
    company: 'Agencia Mardel Palta Digital',
    role: 'Diseñadora Web',
    period: 'Ene 2022 — Sep 2022',
    description:
      'Diseño y desarrollo de sitios turísticos y tiendas online, complementado con la edición de recursos visuales e interfaces utilizando Figma y la suite de Adobe.',
    logo: '/images/Mar-del-Plata-Digital-logo.png',
    clients: ['Bennice', 'Artemedica', 'Hotel Las Rocas', 'Altos Medanos'],
  },
  {
    number: '05',
    company: 'Rubra Eventos',
    role: 'Diseñadora Web',
    period: 'Dic 2021 — Jun 2022',
    description:
      'Diseño de interfaces web y creación de plataformas en WordPress, traduciendo requerimientos en propuestas visuales claras para los proyectos de la agencia.',
    logo: '/images/Logo _ Rubra_eventos.png',
    clients: [],
  },
  {
    number: '06',
    company: 'MOL',
    role: 'Desarrolladora Web',
    period: 'Jul 2020 — Dic 2020',
    description:
      'Trabajo remoto internacional enfocado en el desarrollo front-end de plataformas de envíos, editando código HTML, CSS y PHP para mejorar y rediseñar interfaces.',
    logo: '/images/mol-logo-2023.webp',
    clients: [],
  },
  {
    number: '07',
    company: 'Workana',
    role: 'Desarrolladora Web Freelance',
    period: 'Ene 2020 — Feb 2021',
    description:
      'Gestión independiente de más de 25 proyectos web, plataformas educativas y e-commerce, abarcando desde el diseño estructural desde cero hasta la optimización de posicionamiento SEO y SEM, branding y creación de gráficas digitales. Nivel Golden en la plataforma.',
    logo: '/images/logo _Workana.png',
    workanaLink: 'https://www.workana.com/freelancer/38891cf7d203722edc9a011ddd752b9e',
    clients: [],
  },
  {
    number: '08',
    company: 'Pulso',
    role: 'Diseñadora Web',
    period: 'Oct 2018 — Dic 2019',
    description:
      'Primeros pasos técnicos en el diseño y mantenimiento de plataformas en WordPress, combinando el desarrollo para tiendas e-commerce con la creación de gráficas digitales.',
    logo: '/images/logo_pulso.jpg',
    clients: [],
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
                        Ver perfil en Workana →
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
