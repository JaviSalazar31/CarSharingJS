import React, { useState } from 'react';
import Button from './Button';
import CartWidget from './CartWidget';
import '/src/HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={toggleMenu}>
        &#9776; <span className="menu-text">Menú</span>
      </button>
      {isOpen && (
        <nav className="nav-links">
          <Button text="Inicio" className="nav-link" onClick={() => window.location.href = "#home"} />
          <Button text="Productos" className="nav-link" onClick={() => window.location.href = "#products"} />
          <Button text="Contacto" className="nav-link" onClick={() => window.location.href = "#contact"} />
          <CartWidget />
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;






