import React from 'react';
import Button from './Button'; // Importa el componente de botón
import logo from '../assets/LogoCarSharingJS.png'; // Importa la imagen del logo

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="CarSharingJS Logo" style={{ height: '100px', width: 'auto' }} />
      </div>
      <ul className="nav-links">
        <li>
          <Button text="Inicio" className="nav-link" />
        </li>
        <li>
          <Button text="Productos" className="nav-link" />
        </li>
        <li>
          <Button text="Contacto" className="nav-link" />
        </li>
        <li className="cart-widget">
          <Button text={<i className="fas fa-shopping-cart"></i>} className="cart-button" />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;