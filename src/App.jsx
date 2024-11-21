import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import Contact from './components/Contact';
import CheckoutForm from './components/CheckoutForm';
import Register from './components/Register'; // Importar el componente de registro
import Login from './components/Login'; // Importar el componente de inicio de sesión
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <CartProvider>
      <Router>
        <div className="app-content">
          {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
          {!showWelcome && (
            <>
              <NavBar />
              <div className="main-content">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <div className="page-container">
                        <h2>¡Bienvenido al catálogo de productos de Tienda JS!</h2>
                        <p>
                          TiendaJS es la tienda en línea especializada en los últimos modelos de celulares,
                          con las mejores ofertas y la calidad que mereces.
                        </p>
                      </div>
                    }
                  />
                  <Route
                    path="/products"
                    element={
                      <div className="page-container">
                        <ItemListContainer greeting="Explora nuestros productos" />
                      </div>
                    }
                  />
                  <Route
                    path="/product/:id"
                    element={
                      <div className="page-container">
                        <ItemDetailContainer />
                      </div>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <div className="page-container">
                        <Cart />
                      </div>
                    }
                  />
                  <Route
                    path="/checkout"
                    element={
                      <div className="page-container">
                        <CheckoutForm />
                      </div>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <div className="page-container">
                        <Contact />
                      </div>
                    }
                  />
                  <Route
                    path="/register"
                    element={
                      <div className="page-container">
                        <Register />
                      </div>
                    }
                  />
                  <Route
                    path="/login"
                    element={
                      <div className="page-container">
                        <Login />
                      </div>
                    }
                  />
                  {/* Ruta para manejar páginas no encontradas */}
                  <Route
                    path="*"
                    element={
                      <div className="page-container">
                        <h2>Página no encontrada</h2>
                        <p>Lo sentimos, la página que buscas no existe.</p>
                      </div>
                    }
                  />
                </Routes>
              </div>
              <Footer />
            </>
          )}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;













