import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="page">
      <div className="not-found">
        <div className="not-found__number">404</div>
        <h1 className="not-found__title">Página no encontrada</h1>
        <p className="not-found__desc">
          La página que buscás no existe o fue movida. Volvé al inicio para seguir explorando.
        </p>
        <Link to="/" className="btn btn--primary">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound
