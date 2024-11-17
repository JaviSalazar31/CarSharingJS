import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button onClick={toggleMenu}>☰</button>
      {isOpen && (
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/products">Productos</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/cart">Carrito</Link>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;











