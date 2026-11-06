import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage.js'
import { translations } from '../i18n/translations.js'
import './ProjectDetail.css'
import './Projects.css'

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

  const [webDesktopFailed, setWebDesktopFailed] = useState(false)
  const [webMobileFailed, setWebMobileFailed] = useState(false)
  const webDesktopTimeoutRef = useRef(null)
  const webMobileTimeoutRef = useRef(null)

  useEffect(() => {
    if (slug === 'sistema-de-diseno-bago') {
      timeoutRef.current = setTimeout(() => {
        setIframeFailed(true)
      }, 8000)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [slug])

  useEffect(() => {
    if (isWeb) {
      webDesktopTimeoutRef.current = setTimeout(() => {
        setWebDesktopFailed(true)
      }, 5000)
      webMobileTimeoutRef.current = setTimeout(() => {
        setWebMobileFailed(true)
      }, 5000)
    }
    return () => {
      clearTimeout(webDesktopTimeoutRef.current)
      clearTimeout(webMobileTimeoutRef.current)
    }
  }, [slug, isWeb])

  const handleIframeLoad = () => {
    clearTimeout(timeoutRef.current)
    setIframeFailed(false)
  }

  const handleWebDesktopLoad = () => {
    clearTimeout(webDesktopTimeoutRef.current)
    setWebDesktopFailed(false)
  }

  const handleWebMobileLoad = () => {
    clearTimeout(webMobileTimeoutRef.current)
    setWebMobileFailed(false)
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

  if (!isWeb) {
    const pausedT = t.projectDetail.uxPaused || t.projects.uxPaused
    const whatsappMsg = `¡Hola Vane! Te contacto desde tu portfolio para solicitar el caso de estudio de ${project.title} en formato PDF.`
    const emailSub = `Solicitud de Caso de Estudio en PDF: ${project.title}`
    const emailBody = `Hola Vanesa,\n\nTe contacto desde tu portfolio para solicitar el caso de estudio de "${project.title}" en formato PDF.\n\nMuchas gracias!`

    return (
      <div className="project-detail page">
        <div className="container">
          <Link to="/proyectos" className="project-detail__back">
            {t.projectDetail.back}
          </Link>

          <div className="projects__paused-card project-detail__paused-card">
            <div className="projects__paused-top">
              <div className="badge projects__paused-badge">
                <span className="projects__paused-pulse" aria-hidden="true"></span>
                <span>{pausedT.badge}</span>
              </div>
              <span className="projects__paused-side">{t.projects.uxPaused.badgeSide}</span>
            </div>

            <div className="projects__paused-grid">
              <div className="projects__paused-main">
                <h1 className="projects__paused-title">
                  {project.title}
                </h1>
                <p className="projects__paused-desc">
                  {pausedT.description}
                </p>

                <div className="projects__paused-cta-group">
                  <p className="projects__paused-cta-lead">
                    {pausedT.requestPdfLead || pausedT.ctaLead}
                  </p>
                </div>

                <div className="projects__paused-actions">
                  <a
                    href={`https://wa.me/542664214124?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary projects__paused-btn"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>{pausedT.btnWhatsapp}</span>
                  </a>

                  <a
                    href={`mailto:vanesaledesma90@gmail.com?subject=${encodeURIComponent(emailSub)}&body=${encodeURIComponent(emailBody)}`}
                    className="btn btn--outline projects__paused-btn"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span>{pausedT.btnEmail}</span>
                  </a>
                </div>

                <div className="projects__paused-tip">
                  <span className="projects__paused-tip-icon" aria-hidden="true">←</span>
                  <Link to="/proyectos" className="projects__paused-tip-link">
                    {pausedT.back}
                  </Link>
                </div>
              </div>

              <div className="projects__paused-aside">
                <div className="sticky-note sticky-note--gold projects__paused-note">
                  <div className="sticky-note__divider"></div>
                  <div className="projects__paused-note-header">
                    <span className="projects__paused-note-title">{t.projects.uxPaused.summaryTitle}</span>
                    <span className="sticky-note__pin" aria-hidden="true">📌</span>
                  </div>
                  <ul className="projects__paused-note-list">
                    <li>
                      <span className="projects__paused-check" aria-hidden="true">✓</span>
                      <span>PDF con entregables completos</span>
                    </li>
                    <li>
                      <span className="projects__paused-check" aria-hidden="true">✓</span>
                      <span>Research, Wireframes y UI Kits</span>
                    </li>
                    <li>
                      <span className="projects__paused-check" aria-hidden="true">✓</span>
                      <span>Enviado a demanda</span>
                    </li>
                  </ul>
                  <div className="projects__paused-note-footer">
                    {t.projects.uxPaused.noteFooter}
                  </div>
                </div>
              </div>
            </div>
          </div>
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

        {/* ── Hero Image (solo UX) ── */}
        {!isWeb && (
          <div className="project-detail__hero-img">
            <img src={slugToImage[slug] || `/images/${slug}.png`} alt={project.title} />
          </div>
        )}

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
            <div className="project-detail__section project-detail__section--desktop-view">
              <h2 className="project-detail__section-title">{t.projectDetail.sections.desktopView}</h2>
              <div className="project-detail__iframe-wrapper project-detail__iframe-wrapper--desktop">
                {!webDesktopFailed ? (
                  <iframe
                    className="project-detail__iframe"
                    src={project.desktopUrl}
                    title={`${project.title} - Desktop`}
                    loading="lazy"
                    onLoad={handleWebDesktopLoad}
                  />
                ) : (
                  <div className="project-detail__iframe-fallback">
                    <p>
                      {t.projectDetail.iframeFallbackWeb}{' '}
                      <a
                        href={project.desktopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.projectDetail.iframeFallbackWebLink}
                      </a>.
                    </p>
                  </div>
                )}
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
                  {!webMobileFailed ? (
                    <iframe
                      className="project-detail__iframe"
                      src={project.mobileUrl}
                      title={`${project.title} - Mobile`}
                      loading="lazy"
                      onLoad={handleWebMobileLoad}
                    />
                  ) : (
                    <div className="project-detail__iframe-fallback">
                      <p>
                        {t.projectDetail.iframeFallbackWeb}{' '}
                        <a
                          href={project.mobileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.projectDetail.iframeFallbackWebLink}
                        </a>.
                      </p>
                    </div>
                  )}
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
