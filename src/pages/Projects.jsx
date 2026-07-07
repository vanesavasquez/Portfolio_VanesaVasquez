import { useState } from 'react'
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

const webProjectsMeta = [
  { slug: 'doloponce', image: '/images/fico-crm-mobile.png', size: 'large' },
  { slug: 'selfbox', image: '/images/fico-crm-web.png', size: 'medium' },
  { slug: 'mapfre-tecuidamos', image: '/images/sistema-de-diseno.png', size: 'feature', isFeature: true },
  { slug: 'allcovering', image: '/images/transfer.png', size: 'wide' },
]

function Projects() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [activeTab, setActiveTab] = useState('ux')

  const uxProjects = t.projects.items.map((item, i) => ({
    ...item,
    image: projectsMeta[i].image,
    size: projectsMeta[i].size,
    isFeature: projectsMeta[i].isFeature || false,
  }))

  const webProjects = (t.projects.webItems || []).map((item, i) => ({
    ...item,
    image: webProjectsMeta[i].image,
    size: webProjectsMeta[i].size,
    isFeature: webProjectsMeta[i].isFeature || false,
  }))

  const projects = activeTab === 'ux' ? uxProjects : webProjects

  return (
    <div className="projects page">
      <div className="container">
        {/* ── Header ── */}
        <div className="projects__header">
          <div className="projects__header-top">
            <h1 className="projects__title">
              {t.projects.title}<span>.</span>
            </h1>
            <div className="projects__tabs">
              <button
                className={`projects__tab${activeTab === 'ux' ? ' projects__tab--active' : ''}`}
                onClick={() => setActiveTab('ux')}
                aria-pressed={activeTab === 'ux'}
              >
                {t.projects.tabs.ux}
              </button>
              <button
                className={`projects__tab${activeTab === 'web' ? ' projects__tab--active' : ''}`}
                onClick={() => setActiveTab('web')}
                aria-pressed={activeTab === 'web'}
              >
                {t.projects.tabs.web}
              </button>
            </div>
          </div>
          <p className="projects__subtitle">{t.projects.subtitle}</p>
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
