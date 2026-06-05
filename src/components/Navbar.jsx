import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
        {/* Language toggle and globe hidden */}
      </div>
    </header>
  )
}

export default Navbar
