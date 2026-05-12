import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__bottom">
          <span className="footer__copy">
            © {year} Vanesa A. Ledesma Vasquez. Todos los derechos reservados.
          </span>

          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com/vanesavasquez"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              href="mailto:contacto@vanesavasquez.com"
              className="footer__social-link"
              aria-label="Email"
            >
              ✉
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
