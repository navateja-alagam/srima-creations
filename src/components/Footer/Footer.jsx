import logo from '../../assets/logo.jpg';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img
            src={logo}
            alt="Srima Creations logo"
            className="site-footer__logo"
          />
          <div className="site-footer__wordmark-group">
            <p className="site-footer__wordmark">SRIMA CREATIONS</p>
            <p className="site-footer__tagline">The Customization Couture</p>
          </div>
        </div>

        <ul className="site-footer__icons">
          <li>
            <a
              href="tel:+919959927535"
              aria-label="Call Srima Creations"
              className="site-footer__icon-link"
            >
              📞
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/919959927535"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Srima Creations on WhatsApp"
              className="site-footer__icon-link"
            >
              💬
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/srimacreations"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Srima Creations on Instagram"
              className="site-footer__icon-link"
            >
              📷
            </a>
          </li>
        </ul>

        <div className="site-footer__meta">
          <p className="site-footer__copyright">
            © 2026 Srima Creations. All rights reserved.
          </p>
          <p className="site-footer__crafted">
            Crafted with ♥ for every bride, every celebration, every custom
            fit.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
