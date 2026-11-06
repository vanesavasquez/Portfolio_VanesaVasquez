import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage.js'
import { translations } from '../i18n/translations.js'
import './Projects.css'

// Proyectos UX conservados para reactivación tras finalizar la revisión y ajuste de casos:
// const projectsMeta = [
//   { slug: 'fico-crm-mobile', image: '/images/fico-crm-mobile.png', size: 'large' },
//   { slug: 'fico-crm-web-eticos', image: '/images/fico-crm-web.png', size: 'medium' },
//   { slug: 'sistema-de-diseno-bago', image: '/images/sistema-de-diseno.png', size: 'feature', isFeature: true },
//   { slug: 'transfer-laboratorios-bago', image: '/images/transfer.png', size: 'wide' },
//   { slug: 'campus-bago', image: '/images/campus-bago.png', size: 'square' },
// ]

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

  // Proyectos UX comentados temporalmente mientras la sección permanece en pausa:
  // const uxProjects = t.projects.items.map((item, i) => ({
  //   ...item,
  //   image: projectsMeta[i].image,
  //   size: projectsMeta[i].size,
  //   isFeature: projectsMeta[i].isFeature || false,
  // }))

  const webProjects = (t.projects.webItems || []).map((item, i) => ({
    ...item,
    image: webProjectsMeta[i].image,
    size: webProjectsMeta[i].size,
    isFeature: webProjectsMeta[i].isFeature || false,
  }))

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

        {/* ── Content: UX Paused vs Web Bento ── */}
        {activeTab === 'ux' ? (
          <div className="projects__paused-card">
            <div className="projects__paused-top">
              <div className="projects__paused-badge">
                <span className="projects__paused-pulse" aria-hidden="true"></span>
                <span>{t.projects.uxPaused.badge}</span>
              </div>
              <span className="projects__paused-side">{t.projects.uxPaused.badgeSide}</span>
            </div>

            <div className="projects__paused-grid">
              <div className="projects__paused-main">
                <h2 className="projects__paused-title">
                  {t.projects.uxPaused.title}
                </h2>
                <p className="projects__paused-desc">
                  {t.projects.uxPaused.description}
                </p>

                <div className="projects__paused-cta-group">
                  <p className="projects__paused-cta-lead">
                    {t.projects.uxPaused.ctaLead}
                  </p>
                  <p className="projects__paused-cta-sub">
                    {t.projects.uxPaused.ctaSub}
                  </p>
                </div>

                <div className="projects__paused-actions">
                  <a
                    href={`https://wa.me/542664214124?text=${encodeURIComponent(t.projects.uxPaused.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__paused-btn projects__paused-btn--wa"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>{t.projects.uxPaused.btnWhatsapp}</span>
                  </a>

                  <a
                    href={`mailto:vanesaledesma90@gmail.com?subject=${encodeURIComponent(t.projects.uxPaused.emailSubject)}&body=${encodeURIComponent(t.projects.uxPaused.emailBody)}`}
                    className="projects__paused-btn projects__paused-btn--em"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span>{t.projects.uxPaused.btnEmail}</span>
                  </a>
                </div>

                <div className="projects__paused-tip">
                  <span className="projects__paused-tip-icon" aria-hidden="true">💡</span>
                  <span>
                    {t.projects.uxPaused.tip}{' '}
                    <button
                      type="button"
                      className="projects__paused-tip-link"
                      onClick={() => setActiveTab('web')}
                    >
                      {t.projects.uxPaused.tipTab}
                    </button>
                    .
                  </span>
                </div>
              </div>

              <div className="projects__paused-aside">
                <div className="projects__paused-note">
                  <div className="projects__paused-note-header">
                    <span className="projects__paused-note-title">{t.projects.uxPaused.summaryTitle}</span>
                    <span className="projects__paused-pin" aria-hidden="true">📌</span>
                  </div>
                  <ul className="projects__paused-note-list">
                    <li>
                      <span className="projects__paused-check" aria-hidden="true">✓</span>
                      <span>{t.projects.uxPaused.note1}</span>
                    </li>
                    <li>
                      <span className="projects__paused-check" aria-hidden="true">✓</span>
                      <span>{t.projects.uxPaused.note2}</span>
                    </li>
                    <li>
                      <span className="projects__paused-check" aria-hidden="true">✓</span>
                      <span>{t.projects.uxPaused.note3}</span>
                    </li>
                  </ul>
                  <div className="projects__paused-note-footer">
                    {t.projects.uxPaused.noteFooter}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="projects__bento">
            {webProjects.map(project => (
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
        )}
      </div>
    </div>
  )
}

export default Projects
