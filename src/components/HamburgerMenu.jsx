import React, { useState } from 'react';
import Button from './Button';
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
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Button text="Inicio" className="nav-link" onClick={() => window.location.href = "#home"} />
        <Button text="Productos" className="nav-link" onClick={() => window.location.href = "#products"} />
        <Button text="Contacto" className="nav-link" onClick={() => window.location.href = "#contact"} />
        <Button className="cart-link" text={<i className="fas fa-shopping-cart"></i>} onClick={() => window.location.href = "#cart"} />
      </nav>
    </div>
  );
};

export default HamburgerMenu;










