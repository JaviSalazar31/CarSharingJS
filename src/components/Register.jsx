import React, { useState } from 'react';
import '/src/NavBar.css';

function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
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
    alert('¡Registro exitoso! Revisa tu email para completar el proceso de registro.');
  };

  return (
    <div className="register-container">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;

