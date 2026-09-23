import logo from '../../assets/logo.jpg';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__shimmer" aria-hidden="true"></div>

      <div className="hero__content">
        <span className="hero__badge fade-up">
          <span aria-hidden="true">✨</span> Coming Soon
        </span>

        <img
          src={logo}
          alt="Srima Creations — The Customization Couture logo"
          className="hero__logo fade-up delay-1"
        />

        <h1 className="hero__title fade-up delay-2">SRIMA CREATIONS</h1>

        <p className="hero__tagline fade-up delay-2">The Customization Couture</p>

        <div className="gold-divider fade-up delay-3">
          <span className="motif">♥</span>
        </div>

        <p className="hero__message fade-up delay-3">
          Our website is being stitched together ✨ — more beautiful things
          are coming soon. In the meantime, for any orders or customizations,
          we're just a message away.
        </p>

        <div className="hero__ctas fade-up delay-4">
          <a href="tel:+919959927535" className="btn btn-primary">
            <span aria-hidden="true">📞</span> Call Us
          </a>
          <a
            href="https://wa.me/919959927535"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <span aria-hidden="true">💬</span> WhatsApp Us
          </a>
          <a
            href="https://instagram.com/srimacreations"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Srima Creations on Instagram"
            className="btn btn-instagram"
          >
            <span className="btn-instagram__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
              </svg>
            </span>
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
