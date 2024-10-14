import React from 'react';
import Button from './Button'; // Importa el componente de botón
import logo from '../assets/LogoCarSharingJS.png'; // Importa la imagen del logo
import HamburgerMenu from './HamburgerMenu'; // Importa el componente de menú

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="CarSharingJS Logo" style={{ height: '150px', width: 'auto' }} />
      </div>
      <HamburgerMenu />
    </nav>
  );
};

export default NavBar;