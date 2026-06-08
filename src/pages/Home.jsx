import { useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage.js'
import { translations } from '../i18n/translations.js'
import './Home.css'

function Home() {
  const visualRef = useRef(null)
  const { lang } = useLanguage()
  const t = translations[lang]

  useEffect(() => {
    const visual = visualRef.current
    if (!visual) return

    const notes = visual.querySelectorAll('.sticky-note')

    const handleMouseMove = (e) => {
      const rect = visual.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      visual.style.setProperty('--mouse-x', `${x * 100}%`)
      visual.style.setProperty('--mouse-y', `${y * 100}%`)

      notes.forEach((note, i) => {
        const depth = (i + 1) * 8
        const moveX = (x - 0.5) * depth
        const moveY = (y - 0.5) * depth
        note.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${[
          -2, 3, -1,
        ][i] || 0}deg)`
      })
    }

    const handleMouseLeave = () => {
      notes.forEach((note) => {
        note.style.transform = ''
      })
    }

    visual.addEventListener('mousemove', handleMouseMove)
    visual.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      visual.removeEventListener('mousemove', handleMouseMove)
      visual.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const renderLetters = (word, key) => {
    return (
      <span className="word" key={key}>
        {word.split('').map((letter, i) => (
          <span className="letter" key={i}>
            {letter}
          </span>
        ))}
      </span>
    )
  }

  return (
    <div className="home page">
      {/* ── Hero Section ── */}
      <section className="hero">
        <div className="container">
          <div className="hero__visual-row">
            {/* LEFT: Name + badges */}
            <div className="hero__content">
              <div className="hero__badges">
                {t.home.badges.map((badge, i) => (
                  <span key={i} className="badge hero__badge">{badge}</span>
                ))}
              </div>

              <h1 className="hero__title">
                {renderLetters('Vanesa', 'vanesa')} <span>{renderLetters('Vasquez', 'vasquez')}</span>
              </h1>
            </div>

            {/* RIGHT: Photo with sticky notes overlaid */}
            <div className="hero__visual" ref={visualRef}>
              <div className="hero__img-wrapper">
                <img
                  src="/images/vane_ home_v4.jpeg"
                  alt="Vanesa Vasquez"
                  className="hero__img"
                />
              </div>
              {/* Figma-style selection handles */}
              <div className="hero__handle hero__handle--tl"></div>
              <div className="hero__handle hero__handle--tr"></div>
              <div className="hero__handle hero__handle--bl"></div>
              <div className="hero__handle hero__handle--br"></div>
              {/* Sticky notes positioned over the photo */}
              <div className="hero__notes">
                <div className="sticky-note sticky-note--gold">
                  <div className="sticky-note__divider"></div>
                  <p className="sticky-note__text">
                    {t.home.stickyNotes[0]}
                  </p>
                  <div className="sticky-note__pin">📌</div>
                </div>

                <div className="sticky-note sticky-note--lavender">
                  <div className="sticky-note__divider"></div>
                  <p className="sticky-note__text">
                    {t.home.stickyNotes[1]}
                  </p>
                  <div className="sticky-note__pin">📌</div>
                </div>

                <div className="sticky-note sticky-note--pink">
                  <div className="sticky-note__divider"></div>
                  <p className="sticky-note__text">
                    {t.home.stickyNotes[2]}
                  </p>
                  <div className="sticky-note__pin"></div>
                </div>
              </div>
            </div>
          </div>

          {/* BELOW: Description */}
          <div className="hero__description">
            <p className="hero__subtitle">
              {t.home.description1}
            </p>
            <p className="hero__subtitle" dangerouslySetInnerHTML={{ __html: t.home.description2 }}>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
