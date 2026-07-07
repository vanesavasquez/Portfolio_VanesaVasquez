import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage.js'
import { translations } from '../i18n/translations.js'
import './ProjectDetail.css'

const DS_URL = 'https://vanesavasquez.github.io/Laboratorio-DS/'

const slugToImage = {
  'fico-crm-mobile': '/images/fico-crm-mobile.png',
  'fico-crm-web-eticos': '/images/fico-crm-web.png',
  'sistema-de-diseno-bago': '/images/sistema-de-diseno.png',
  'transfer-laboratorios-bago': '/images/transfer.png',
  'campus-bago': '/images/campus-bago.png',
  'doloponce': '/images/fico-crm-mobile.png',
  'selfbox': '/images/fico-crm-web.png',
  'mapfre-tecuidamos': '/images/sistema-de-diseno.png',
  'allcovering': '/images/transfer.png',
}

function ProjectDetail() {
  const { slug } = useParams()
  const { lang } = useLanguage()
  const t = translations[lang]

  const isWeb = !!t.projectDetail.webItems?.[slug]
  const project = isWeb
    ? t.projectDetail.webItems[slug]
    : t.projectDetail.items[slug]

  const [iframeFailed, setIframeFailed] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (slug === 'sistema-de-diseno-bago') {
      timeoutRef.current = setTimeout(() => {
        setIframeFailed(true)
      }, 8000)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [slug])

  const handleIframeLoad = () => {
    clearTimeout(timeoutRef.current)
    setIframeFailed(false)
  }

  if (!project) {
    return (
      <div className="project-detail page">
        <div className="container">
          <Link to="/proyectos" className="project-detail__back">
            {t.projectDetail.back}
          </Link>
          <h1 className="project-detail__title">{t.projectDetail.notFound}</h1>
          <p className="project-detail__desc">
            {t.projectDetail.notFoundDesc}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail page">
      <div className="container">
        {/* ── Back link ── */}
        <Link to="/proyectos" className="project-detail__back">
          {t.projectDetail.back}
        </Link>

        {/* ── Header ── */}
        <div className="project-detail__header">
          <div className="project-detail__info">
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__desc">{project.description}</p>
          </div>
        </div>

        {/* ── Hero Image ── */}
        <div className="project-detail__hero-img">
          <img src={slugToImage[slug] || `/images/${slug}.png`} alt={project.title} />
        </div>

        {isWeb ? (
          <>
            {/* ── Description ── */}
            <div className="project-detail__section">
              <h2 className="project-detail__section-title">{t.projectDetail.sections.description}</h2>
              <p className="project-detail__text-block">
                {project.description}
              </p>
            </div>

            {/* ── Skills ── */}
            <div className="project-detail__section">
              <h2 className="project-detail__section-title">{t.projectDetail.sections.skills}</h2>
              <div className="project-detail__skills-grid">
                {project.skills.map(skill => (
                  <div key={skill.name} className="project-detail__skill-card">
                    <span className="project-detail__skill-name">{skill.name}</span>
                    <p className="project-detail__skill-desc">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Desktop View ── */}
            <div className="project-detail__section">
              <h2 className="project-detail__section-title">{t.projectDetail.sections.desktopView}</h2>
              <div className="project-detail__iframe-wrapper project-detail__iframe-wrapper--desktop">
                <iframe
                  className="project-detail__iframe"
                  src={project.desktopUrl}
                  title={`${project.title} - Desktop`}
                  loading="lazy"
                />
              </div>
              <div className="project-detail__iframe-link">
                <a
                  href={project.desktopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projectDetail.viewFullPage}
                </a>
              </div>
            </div>

            {/* ── Mobile View ── */}
            <div className="project-detail__section">
              <h2 className="project-detail__section-title">{t.projectDetail.sections.mobileView}</h2>
              <div className="project-detail__iframe-mobile-wrapper">
                <div className="project-detail__iframe-wrapper project-detail__iframe-wrapper--mobile">
                  <iframe
                    className="project-detail__iframe"
                    src={project.mobileUrl}
                    title={`${project.title} - Mobile`}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="project-detail__iframe-link">
                <a
                  href={project.mobileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projectDetail.viewFullPage}
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* ── Description blocks ── */}
            <div className="project-detail__section">
              <h2 className="project-detail__section-title">{t.projectDetail.sections.description}</h2>
              <p className="project-detail__text-block">
                {project.description}
              </p>
            </div>

            <div className="project-detail__section">
              <h2 className="project-detail__section-title">{t.projectDetail.sections.challenge}</h2>
              <p className="project-detail__text-block">
                {project.challenge}
              </p>
            </div>

            <div className="project-detail__section">
              <h2 className="project-detail__section-title">{t.projectDetail.sections.research}</h2>
              <p className="project-detail__text-block">
                {project.research}
              </p>
            </div>

            <div className="project-detail__section">
              <h2 className="project-detail__section-title">{t.projectDetail.sections.solution}</h2>
              <p className="project-detail__text-block">
                {project.solution}
              </p>
            </div>

            <div className="project-detail__section">
              <h2 className="project-detail__section-title">{t.projectDetail.sections.impact}</h2>
              <p className="project-detail__text-block">
                {project.impact}
              </p>
            </div>

            {slug !== 'sistema-de-diseno-bago' && (
              <>
                {/* ── Screens Gallery ── */}
                <div className="project-detail__section">
                  <h2 className="project-detail__section-title">{t.projectDetail.sections.screens}</h2>
                  <div className="project-detail__screens">
                    {project.screens.map(screen => (
                      <div key={screen} className="project-detail__screen">
                        <span>📱</span>
                        {screen}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Full width image ── */}
                {slug !== 'fico-crm-mobile' && (
                  <div className="project-detail__section">
                    <h2 className="project-detail__section-title">{t.projectDetail.sections.fullDesign}</h2>
                    <div className="project-detail__full-img">
                      Imagen portada del diseño sistema
                    </div>
                  </div>
                )}

                {/* ── Architecture image ── */}
                <div className="project-detail__section">
                  <h2 className="project-detail__section-title">{t.projectDetail.sections.architecture}</h2>
                  <div className="project-detail__full-img">
                    Imagen del armado de la arquitectura
                  </div>
                </div>
              </>
            )}

            {slug === 'sistema-de-diseno-bago' && (
              <>
                {/* ── Explorar el sistema (iframe) ── */}
                <div className="project-detail__section">
                  <h2 className="project-detail__section-title">{t.projectDetail.sections.explore}</h2>

                  {/* Desktop iframe */}
                  <div className="project-detail__iframe-wrapper">
                    {!iframeFailed ? (
                      <iframe
                        className="project-detail__iframe"
                        src={DS_URL}
                        title="Sistema de Diseño Laboratorios Bagó"
                        loading="lazy"
                        onLoad={handleIframeLoad}
                      />
                    ) : (
                      <div className="project-detail__iframe-fallback">
                        <p>
                          {t.projectDetail.iframeFallback}{' '}
                          <a
                            href={DS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t.projectDetail.iframeFallbackLink}
                          </a>.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="project-detail__iframe-link">
                    <a
                      href={DS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.projectDetail.viewFullPage}
                    </a>
                  </div>

                  {/* Mobile external link */}
                  <div className="project-detail__iframe-mobile">
                    <a
                      href={DS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                    >
                      {t.projectDetail.exploreSystem}
                    </a>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail
