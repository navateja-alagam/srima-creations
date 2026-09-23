import qr from '../../assets/instagram-qr.jpeg';
import './Contact.css';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=H.%20No%3A%203-76%2F15%2FA%2F1%2C%20Manidweepam%2C%20Road%20No%3A%2008%2C%20Venkateswara%20Colony%2C%20Vidyanagar%2C%20Karimnagar%2C%20Telangana%20505001';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Reach Us</p>
          <h2 className="section-title">Let&rsquo;s Create Something Beautiful</h2>
          <p className="section-subtitle">
            Whether it&rsquo;s a quick question or a design you&rsquo;ve been dreaming
            about — we&rsquo;d love to hear from you.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__card fade-up delay-1">
            <span className="contact__icon" aria-hidden="true">
              📞
            </span>
            <h3>Call &amp; WhatsApp</h3>
            <p className="contact__text">+91 99599 27535</p>
            <div className="contact__actions">
              <a href="tel:+919959927535" className="btn btn-primary">
                Call Now
              </a>
              <a
                href="https://wa.me/919959927535"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="contact__card fade-up delay-2">
            <span className="contact__icon" aria-hidden="true">
              📍
            </span>
            <h3>Visit Us</h3>
            <p className="contact__text">
              H. No: 3-76/15/A/1, Manidweepam, Road No: 08, Venkateswara Colony,
              Vidyanagar, Karimnagar, Telangana 505001
            </p>
            <div className="contact__actions">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green-outline"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="contact__card fade-up delay-3">
            <span className="contact__icon" aria-hidden="true">
              📷
            </span>
            <h3>Instagram</h3>
            <img
              src={qr}
              alt="Scan this QR code to visit Srima Creations on Instagram"
              className="contact__qr"
            />
            <a
              href="https://instagram.com/srimacreations"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__handle"
            >
              @SRIMACREATIONS
            </a>
            <p className="contact__caption">Scan to see our latest designs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
