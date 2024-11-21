import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useCart } from '/src/context/CartContext';
import '/src/NavBar.css';

function NavBar() {
  const { getTotalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/assetss/LogoTiendaJS.png" alt="TiendaJS Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Inicio</Link>
        <Link to="/products" className="navbar-link">Productos</Link>
        <Link to="/contact" className="navbar-link">Contacto</Link>
        <Link to="/cart" className="navbar-link">
          <CartWidget itemCount={getTotalItems()} />
        </Link>
      </div>
      <div className="auth-links">
        <Link to="/register" className="auth-link">Registrarse</Link>
        <Link to="/login" className="auth-link">Iniciar Sesión</Link>
      </div>
    </nav>
  );
}

export default NavBar;






