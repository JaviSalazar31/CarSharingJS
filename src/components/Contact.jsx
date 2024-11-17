import React, { useState } from 'react';
import '/src/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); 
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;

    // Validación de los campos
    const newErrors = {
      name: formData.name ? '' : 'El campo Nombre es obligatorio.',
      email: validateEmail(formData.email)
        ? ''
        : 'Debes ingresar un email válido.',
      message: formData.message ? '' : 'El campo Mensaje es obligatorio.',
    };

    setErrors(newErrors);

  
    hasErrors = Object.values(newErrors).some((error) => error !== '');

    if (!hasErrors) {
      
      setSuccessMessage('¡El formulario ha sido enviado con éxito!');
      setFormData({ name: '', email: '', message: '' }); 
    } else {
      setSuccessMessage(''); 
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contacto</h1>
      <p className="contact-description">
        ¿Tienes alguna pregunta o necesitas más información? ¡Ponte en contacto con nosotros!
      </p>
      <div className="contact-info">
        <h3>Dirección</h3>
        <p>Calle Avenida Corrientes 1283, Ciudad Autónoma de Buenos Aires, Argentina</p>
        <h3>Teléfono</h3>
        <p>+1 (555) 123-4567</p>
        <h3>Email</h3>
        <p>contacto@tiendajs.com</p>
      </div>
      <h2 className="contact-form-title">Formulario de Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-button">
          Enviar
        </button>
        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}
      </form>
    </div>
  );
}

export default Contact;




