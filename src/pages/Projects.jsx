import { Link } from 'react-router-dom'
import './Projects.css'

const projects = [
  {
    slug: 'fico-crm-mobile',
    title: 'FiCo CRM - Mobile | Laboratorio Bagó',
    category: 'Producto',
    description:
      'FiCo CRM Mobile es una solución móvil creada desde cero para optimizar el trabajo de campo. El proyecto nació para simplificar la carga administrativa, comenzando con Éticos y su éxito sumó más negocios y países.',
    image: '/images/fico-crm-mobile.png',
    size: 'large',
  },
  {
    slug: 'fico-crm-web-eticos',
    title: 'FiCo CRM Web (Éticos)',
    category: 'Producto',
    description:
      'FiCo CRM Web es la plataforma de escritorio que centraliza la gestión y el seguimiento de la actividad administrativa y de clientes de la unidad de Éticos.',
    image: '/images/fico-crm-web.png',
    size: 'medium',
  },
  {
    slug: 'sistema-de-diseno-bago',
    title: 'Sistema de Diseño del Ecosistema Digital Laboratorios Bagó',
    category: 'System design',
    description:
      'El Sistema de Diseño para los productos CRM de Laboratorios Bagó nació como una respuesta estratégica a la fragmentación visual y operativa entre las distintas plataformas y unidades de negocio.',
    image: '/images/sistema-de-diseno.png',
    size: 'feature',
    isFeature: true,
  },
  {
    slug: 'transfer-laboratorios-bago',
    title: 'Transfer (Laboratorios Bagó)',
    category: 'Rediseño UX',
    description:
      'El proyecto Transfer se centró en el rediseño del módulo de carga de productos dentro de una plataforma del CRM B2B optimizada para tablets.',
    image: '/images/transfer.png',
    size: 'wide',
  },
  {
    slug: 'campus-bago',
    title: 'Campus Bagó: Diseño de Capacitación Digital y Adopción para FiCo CRM',
    category: 'Contenido Digital',
    description:
      'Lanzamiento de capacitaciones (mp4) dentro del campus de la empresa para asegurar una adopción fluida mediante una estrategia de onboarding y capacitación a gran escala. La serie completa incluye 12 videos.',
    image: '/images/campus-bago.png',
    size: 'square',
  },
]

function Projects() {
  return (
    <div className="projects page">
      <div className="container">
        {/* ── Header ── */}
        <div className="projects__header">
          <h1 className="projects__title">
            Proyectos<span>.</span>
          </h1>
        </div>

        {/* ── Bento Grid ── */}
        <div className="projects__bento">
          {projects.map(project => (
            <Link
              key={project.slug}
              to={`/proyectos/${project.slug}`}
              className={`project-card project-card--${project.size}${project.isFeature ? ' project-card--feature' : ''}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="project-card__img">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  'Imagen del proyecto'
                )}
              </div>
              <div className="project-card__body">
                <div className="project-card__category">{project.category}</div>
                <h2 className="project-card__title">{project.title}</h2>
                <p className="project-card__desc">{project.description}</p>
                <span className="project-card__cta">
                  Ver caso de estudio →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
