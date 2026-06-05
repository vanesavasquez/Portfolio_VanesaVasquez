import { useRef, useEffect } from 'react'
import './Home.css'

function Home() {
  const visualRef = useRef(null)

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
                <span className="badge hero__badge">UX Designer</span>
                <span className="badge hero__badge">Web Developer</span>
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
                    Piensa más diseña menos
                  </p>
                  <div className="sticky-note__pin">📌</div>
                </div>

                <div className="sticky-note sticky-note--lavender">
                  <div className="sticky-note__divider"></div>
                  <p className="sticky-note__text">
                    Simplifica y luego simplifica de nuevo
                  </p>
                  <div className="sticky-note__pin">📌</div>
                </div>

                <div className="sticky-note sticky-note--pink">
                  <div className="sticky-note__divider"></div>
                  <p className="sticky-note__text">
                    No tiene que ser perfecto mamá.
                  </p>
                  <div className="sticky-note__pin"></div>
                </div>
              </div>
            </div>
          </div>

          {/* BELOW: Description */}
          <div className="hero__description">
            <p className="hero__subtitle">
              ¡Hola, mi nombre es Vane! 👋 y soy Diseñadora UX/UI con más de 4 años de experiencia en diseño digital y un fuerte enfoque en research, estrategia y visión de negocio. Cuento con un backup de 3 años de Diseñadora web y FrontEnd. Mi objetivo es crear productos digitales que funcionen para las personas y para los objetivos del negocio y mis clientes, combinando empatía, análisis y creatividad.
            </p>
            <p className="hero__subtitle">
              Actualmente soy consultora freelancer para proyectos de <strong>Desarrollo web</strong>, <strong>diseño UX/UI</strong> y <strong>diseño de tiendas online</strong>. ¿Tienes algun proyecto en mente? <strong>Escribime por whatsapp.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
