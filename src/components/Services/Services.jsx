import './Services.css';

const services = [
  {
    icon: '🪡',
    title: 'Designer Blouses',
    description: 'Statement blouses tailored to flatter your fit, fabric, and occasion.',
  },
  {
    icon: '👗',
    title: 'Customised Kurtas & Lehengas',
    description: 'Kurtas and lehengas designed around your colours, comfort, and story.',
  },
  {
    icon: '🧵',
    title: 'Frocks & Indo-Western Dresses',
    description: 'Playful frocks and fusion silhouettes for every little celebration.',
  },
  {
    icon: '👩‍👧',
    title: 'Mom & Daughter Matching Outfits',
    description: 'Coordinated outfits that let you twin beautifully, stitch for stitch.',
  },
  {
    icon: '🪷',
    title: 'Muggam (Aari) Work',
    description: 'Intricate Aari embroidery and muggam detailing, hand-worked with care.',
  },
  {
    icon: '🎀',
    title: 'Pre-Pleating & Pallu Tassels',
    description: 'Saree pre-pleating and tasselled pallus, ready to drape in minutes.',
  },
];

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">
            <span aria-hidden="true">✂️</span> What We Do
          </p>
          <h2 className="section-title">Crafted Just For You</h2>
          <p className="section-subtitle">
            From everyday elegance to wedding-day grandeur, every piece we create is
            customized to fit you — and only you.
          </p>
        </div>

        <div className="services__banner">
          <span aria-hidden="true">✨</span>
          Bring Any Design — We Customize It!
          <span aria-hidden="true">✨</span>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`services__card fade-up delay-${(index % 3) + 1}`}
            >
              <span className="services__icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
