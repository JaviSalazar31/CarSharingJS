import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/NavBar.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setError('La contraseña debe contener un mínimo de 8 caracteres');
      return;
    }

    setError('');
    alert('¡Inicio de sesión exitoso!');
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Iniciar Sesión</button>
        <Link to="/register" className="register-link">
          ¿Aún no te haz registrado? ¡Hazlo ahora!
        </Link>
      </form>
    </div>
  );
}

export default Login;
