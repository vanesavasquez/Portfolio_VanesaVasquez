import { NavLink } from 'react-router-dom'
import './BottomNav.css'

const navItems = [
  { to: '/', icon: '⌂', label: 'Inicio', end: true },
  { to: '/proyectos', icon: '⊞', label: 'Proyectos' },
  { to: '/experiencia', icon: '◈', label: 'Experiencia' },
  { to: '/sobre-mi', icon: '⬡', label: 'Sobre Mí' },
  { to: '/resumen', icon: '⎙', label: 'CV' },
]

function BottomNav() {
  return (
    <>
      <nav id="bottom-nav" className="bottom-nav" aria-label="Navegación principal">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `bottom-nav__link${isActive ? ' bottom-nav__link--active' : ''}`
            }
          >
            <span className="bottom-nav__icon">{item.icon}</span>
            <span className="bottom-nav__label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <a
        href="https://wa.me/"
        className="fab-contact"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        title="Contactar"
      >
        💬
      </a>
    </>
  )
}

export default BottomNav
