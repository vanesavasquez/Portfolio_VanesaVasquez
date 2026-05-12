import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('ESP')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      id="navbar"
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
    >
      <Link to="/" className="navbar__brand">
        Vanesa L. Vasquez
      </Link>

      <div className="navbar__actions">
        <div className="navbar__lang-toggle">
          <button
            className={`navbar__lang-btn${lang === 'ENG' ? ' navbar__lang-btn--active' : ''}`}
            onClick={() => setLang('ENG')}
          >
            ENG
          </button>
          <button
            className={`navbar__lang-btn${lang === 'ESP' ? ' navbar__lang-btn--active' : ''}`}
            onClick={() => setLang('ESP')}
          >
            ESP
          </button>
        </div>
        <span className="navbar__globe" role="img" aria-label="Idioma">
          ⊕
        </span>
      </div>
    </header>
  )
}

export default Navbar
