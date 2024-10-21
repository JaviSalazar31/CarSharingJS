import React from 'react';
import Button from './Button'; // Importa el componente de botón
import logo from '../assets/LogoCarSharingJS.png'; // Importa la imagen del logo
import CartWidget from './CartWidget'; // Importa el componente del carrito de compras

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="CarSharingJS Logo" style={{ height: '80px', width: 'auto' }} />
      </div>
      <div className="nav-links">
        <Button text="Inicio" className="nav-link" onClick={() => window.location.href = "#home"} />
        <Button text="Productos" className="nav-link" onClick={() => window.location.href = "#products"} />
        <Button text="Contacto" className="nav-link" onClick={() => window.location.href = "#contact"} />
        <CartWidget className="cart-link" />
      </div>
    </nav>
  );
}

export default NavBar;




