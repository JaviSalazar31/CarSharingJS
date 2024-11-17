import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Importar la configuración de Firebase
import '/src/CheckoutForm.css';

function CheckoutForm() {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    tarjeta: '',
  });
  const [timer, setTimer] = useState(240); // 4 minutos en segundos
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [processingMessage, setProcessingMessage] = useState(''); // Nuevo estado para el mensaje de procesamiento
  const [isFormComplete, setIsFormComplete] = useState(false);

  // Manejo del temporizador
  useEffect(() => {
    if (timer === 0) {
      setErrorMessage(
        'El tiempo ha expirado. Por favor, vuelve a seleccionar los productos para realizar la compra.'
      );
      setTimeout(() => {
        clearCart();
        navigate('/cart');
      }, 4000);
    }

    const interval = setInterval(() => {
      setTimer((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, clearCart, navigate]);

  // Manejo de navegación y recarga
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isFormComplete) {
        e.preventDefault();
        e.returnValue = ''; // Mensaje estándar del navegador
      }
    };

    const handleNavigation = (e) => {
      if (!isFormComplete) {
        const confirmLeave = window.confirm(
          'Si abandonas esta página, la transacción será cancelada. ¿Estás seguro de continuar?'
        );
        if (!confirmLeave) {
          e.preventDefault();
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handleNavigation);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, [isFormComplete]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones de formulario
    if (
      !formData.nombre ||
      !formData.apellido ||
      !formData.email ||
      !formData.direccion ||
      !formData.tarjeta
    ) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Ingresa un email válido.');
      return;
    }

    if (formData.tarjeta.length !== 16 || isNaN(formData.tarjeta)) {
      setErrorMessage('La tarjeta de crédito debe contener 16 dígitos.');
      return;
    }

    // Mostrar mensaje de procesamiento
    setProcessingMessage('Aguarde... Estamos procesando su transacción.');
    setErrorMessage('');
    setIsFormComplete(true);

    setTimeout(async () => {
      try {
        const order = {
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          direccion: formData.direccion,
          tarjeta: formData.tarjeta, // ⚠️ En producción, evita guardar datos sensibles como este
          fecha: new Date(),
        };

        const docRef = await addDoc(collection(db, 'orders'), order);
        setProcessingMessage('');
        setSuccessMessage(
          `La transacción ha sido aprobada con éxito. ID de la orden: ${docRef.id}`
        );
        clearCart();

        setTimeout(() => navigate('/'), 4000);
      } catch (error) {
        console.error('Error al guardar la orden: ', error);
        setProcessingMessage('');
        setErrorMessage(
          'Ocurrió un error al procesar la orden. Por favor, inténtalo más tarde.'
        );
      }
    }, 3000); // Simula el tiempo de procesamiento de 3 segundos
  };

  return (
    <div className="checkout-form-container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {processingMessage && <p className="processing-message">{processingMessage}</p>}
      {successMessage ? (
        <p className="success-message">{successMessage}</p>
      ) : (
        <>
          <h2>Ingresa tus datos para completar la compra</h2>
          <p
            className={`timer ${
              timer <= 30 ? 'warning' : ''
            }`} // Clase "warning" si el tiempo es crítico
          >
            Tiempo restante: {formatTime(timer)}
          </p>
          <form className="checkout-form" onSubmit={handleSubmit}>
            <label>
              Nombre:
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </label>
            <label>
              Apellido:
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
              />
            </label>
            <label>
              E-mail:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Dirección:
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
              />
            </label>
            <label>
              Tarjeta de crédito:
              <input
                type="text"
                name="tarjeta"
                maxLength="16"
                value={formData.tarjeta}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Finalizar compra</button>
          </form>
        </>
      )}
    </div>
  );
}

export default CheckoutForm;











