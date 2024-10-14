import React from 'react';
import '/src/Button.css'; // Puedes definir estilos personalizados en un archivo CSS

const Button = ({ text, onClick, className }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
