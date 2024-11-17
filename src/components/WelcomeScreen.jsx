import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/WelcomeScreen.css';

function WelcomeScreen({ onComplete }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); 
      onComplete(); 
    }, 5000); 

    return () => clearTimeout(timer);
  }, [navigate, onComplete]);

  return (
    <div className="welcome-screen">
      <h1 className="welcome-message">¡Bienvenidos a la store de smartphones con las mejores promociones!</h1>
      <img src="/assetss/MuestraPhone.png" alt="MuestraPhone" className="welcome-image" />
    </div>
  );
}

export default WelcomeScreen;


