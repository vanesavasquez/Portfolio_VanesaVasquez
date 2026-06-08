import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage.js'
import { translations } from '../i18n/translations.js'
import './Projects.css'

const projectsMeta = [
  { slug: 'fico-crm-mobile', image: '/images/fico-crm-mobile.png', size: 'large' },
  { slug: 'fico-crm-web-eticos', image: '/images/fico-crm-web.png', size: 'medium' },
  { slug: 'sistema-de-diseno-bago', image: '/images/sistema-de-diseno.png', size: 'feature', isFeature: true },
  { slug: 'transfer-laboratorios-bago', image: '/images/transfer.png', size: 'wide' },
  { slug: 'campus-bago', image: '/images/campus-bago.png', size: 'square' },
]

function Projects() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const projects = t.projects.items.map((item, i) => ({
    ...item,
    image: projectsMeta[i].image,
    size: projectsMeta[i].size,
    isFeature: projectsMeta[i].isFeature || false,
  }))

  return (
    <div className="projects page">
      <div className="container">
        {/* ── Header ── */}
        <div className="projects__header">
          <h1 className="projects__title">
            {t.projects.title}<span>.</span>
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
                  {t.projects.viewCase}
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
