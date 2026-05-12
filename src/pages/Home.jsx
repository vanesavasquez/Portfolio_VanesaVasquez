import { useState } from 'react'
import './Home.css'

function Home() {
  const [visibleTags, setVisibleTags] = useState({
    badge: true,
    frame: true,
  })

  const dismissTag = (tag) => {
    setVisibleTags((prev) => ({ ...prev, [tag]: false }))
  }

  return (
    <div className="home page">
      {/* ── Hero Section ── */}
      <section className="hero">
        <div className="container">
          <div className="hero__visual-row">
            {/* LEFT: Name + badge */}
            <div className="hero__content">
              {visibleTags.badge && (
                <span className="chip chip--dismiss hero__badge">
                  PRODUCT DESIGNER (UX)
                  <button className="chip__close" onClick={() => dismissTag('badge')} aria-label="Cerrar etiqueta">×</button>
                </span>
              )}

              <h1 className="hero__title">
                Vanesa <span>Vasquez</span>
              </h1>
            </div>

            {/* RIGHT: Photo with sticky notes overlaid */}
            <div className="hero__visual">
              <div className="hero__img-wrapper">
                <img
                  src="/images/vane_ home_v3.png"
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
                  <div className="sticky-note__pin">📌</div>
                </div>
              </div>
            </div>
          </div>

          {/* BELOW: Description */}
          <div className="hero__description">
            <p className="hero__subtitle">
              Bienvenidos a mi portfolio! Mi nombre es Vanesa y soy Product Designer con especialización en UX que habla el lenguaje del desarrollo. Mi enfoque principal es la creación de ecosistemas digitales centrados en el usuario que no solo sean intuitivos, sino que impulsen los objetivos de negocio. Mi fuerte es transformar problemas complejos —como sistemas CRM o aplicaciones móviles— en experiencias digitales simples, eficientes y basadas en datos.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
