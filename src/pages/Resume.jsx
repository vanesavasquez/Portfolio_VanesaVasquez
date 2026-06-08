import { useLanguage } from '../hooks/useLanguage.js'
import { translations } from '../i18n/translations.js'
import './Resume.css'

function Resume() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <div className="resume page">
      <div className="container">
        {/* ── Header ── */}
        <div className="resume__header">
          <div className="resume__header-left">
            <h1 className="resume__name">{t.resume.name}</h1>
            <div className="resume__roles">
              {t.resume.roles}
            </div>
            <p className="resume__intro">
              {t.resume.intro}
            </p>
            <a
              href="/docs/cv/CV_LedesmaVanesa_UXUIdesigner-2.pdf"
              className="btn btn--primary resume__download-btn"
              download
            >
              {t.resume.downloadCV}
            </a>
          </div>

          <div className="resume__photo">
            <img
              src="/images/imagen-perfil-vanesa-vasquez-byn.png"
              alt="Vanesa Vasquez"
              className="resume__photo-img"
            />
          </div>
        </div>

        {/* ── Skills ── */}
        <section className="resume__section">
          <h2 className="resume__section-title">{t.resume.sections.skills}</h2>
          <div className="resume__skills-grid">
            {t.resume.skills.map(skill => (
              <div
                key={skill.name}
                className={`resume__skill-card${skill.highlight ? ' resume__skill-card--highlight' : ''}`}
              >
                <span className="resume__skill-name">{skill.name}</span>
                <p className="resume__skill-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="resume__section">
          <h2 className="resume__section-title">{t.resume.sections.experience}</h2>
          <div className="resume__entries">
            {t.resume.experience.map(exp => (
              <div key={exp.company} className="resume__entry">
                <span className="resume__entry-period">{exp.period}</span>
                <div>
                  <div className="resume__entry-company">{exp.company}</div>
                  <div className="resume__entry-role">{exp.role}</div>
                  <p className="resume__entry-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section className="resume__section">
          <h2 className="resume__section-title">{t.resume.sections.education}</h2>

          <div className="resume__edu-entries">
            {t.resume.education.map(edu => (
              <div key={edu.title} className="resume__edu-entry">
                <span className="resume__edu-year">{edu.year}</span>
                <div>
                  <div className="resume__edu-title">{edu.title}</div>
                  <div className="resume__edu-institution">{edu.institution}</div>
                  <p className="resume__edu-desc">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Languages ── */}
        <section className="resume__section">
          <h2 className="resume__section-title">{t.resume.sections.languages}</h2>
          <div className="resume__languages">
            {t.resume.languages.map(language => (
              <div key={language.name} className="resume__language">
                <span className="resume__language-name">{language.name}</span>
                <span className="resume__language-level">{language.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact footer ── */}
        <div className="resume__footer-bar">
          <div className="resume__contact-links">
            <a href="mailto:contacto@vanesavasquez.com" className="resume__contact-link">
              ✉ Email
            </a>
            <a href="https://www.linkedin.com/in/vanesa-vasquez/" className="resume__contact-link" target="_blank" rel="noopener noreferrer">
              in LinkedIn
            </a>
            <a href="https://github.com/vanesavasquez" className="resume__contact-link" target="_blank" rel="noopener noreferrer">
              GH GitHub
            </a>
          </div>
          <a
            href="/docs/cv/CV_LedesmaVanesa_UXUIdesigner-2.pdf"
            className="btn btn--outline btn--sm"
            download
          >
            {t.resume.downloadCV}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resume
