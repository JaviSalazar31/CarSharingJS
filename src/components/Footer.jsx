// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Tienda JS. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;