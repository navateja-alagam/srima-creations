import './FloatingWhatsApp.css';

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919959927535"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with Srima Creations on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="floating-whatsapp__icon"
        role="presentation"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.004 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.38 1.65 6.22L3.2 28.8l6.77-1.62a12.73 12.73 0 0 0 6.03 1.52c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.7-12.8-12.7Zm0 23.24c-2 0-3.9-.55-5.55-1.53l-.4-.24-4.03.96.98-3.9-.26-.4a10.4 10.4 0 0 1-1.6-5.53c0-5.77 4.7-10.46 10.46-10.46s10.46 4.7 10.46 10.46-4.42 10.64-9.66 10.64Zm5.86-7.83c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.5-.16-.72.16-.2.3-.83 1.05-1.02 1.26-.2.2-.38.23-.7.08-.32-.16-1.35-.5-2.56-1.6-.94-.85-1.58-1.9-1.76-2.22-.2-.32-.02-.5.16-.66.16-.16.36-.4.54-.6.18-.2.24-.34.36-.56.12-.24.06-.44-.03-.6-.1-.16-.9-2.16-1.03-2.5-.15-.32-.3-.28-.42-.28-.1 0-.36 0-.55.02-.2.02-.5.1-.75.4-.26.3-1 1-1 2.42s1.03 2.8 1.17 3c.16.2 2 3.03 4.85 4.15 2.85 1.13 2.85.75 3.37.7.52-.05 1.65-.68 1.9-1.32.24-.65.24-1.2.16-1.32-.06-.12-.24-.2-.54-.36Z"
        />
      </svg>
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
}

export default FloatingWhatsApp;
