import React from 'react';
import '/src/Button.css'; // Archivo de estilos para botones

const Button = ({ text, onClick, className }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

