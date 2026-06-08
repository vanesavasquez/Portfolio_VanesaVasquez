import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage.js'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggleLanguage } = useLanguage()

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
            className={`navbar__lang-btn${lang === 'es' ? ' navbar__lang-btn--active' : ''}`}
            onClick={() => lang !== 'es' && toggleLanguage()}
            aria-label="Español"
            aria-pressed={lang === 'es'}
          >
            ES
          </button>
          <button
            className={`navbar__lang-btn${lang === 'en' ? ' navbar__lang-btn--active' : ''}`}
            onClick={() => lang !== 'en' && toggleLanguage()}
            aria-label="English"
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
