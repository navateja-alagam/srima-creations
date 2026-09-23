import { useState } from 'react';
import logo from '../../assets/logo.jpg';
import './Header.css';

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#home" className="site-header__brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="Srima Creations logo"
            className="site-header__logo"
          />
          <span className="site-header__wordmark">
            <span className="site-header__title">SRIMA CREATIONS</span>
            <span className="site-header__tagline">
              The Customization Couture
            </span>
          </span>
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">What We Do</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`site-header__menu-icon${open ? ' is-open' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`site-header__mobile-nav${open ? ' is-open' : ''}`}
        aria-label="Mobile"
      >
        <ul>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              What We Do
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
