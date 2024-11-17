import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';

function ItemDetail({ id, name = '', price = 0, image, description = '', stock = 0 }) {
  const { addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity, stock });
    setSuccessMessage('¡Producto agregado exitosamente!');
    setTimeout(() => setSuccessMessage(''), 3000); // Oculta el mensaje después de 3 segundos
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
    setSuccessMessage('¡Producto eliminado exitosamente!');
    setTimeout(() => setSuccessMessage(''), 3000); // Oculta el mensaje después de 3 segundos
  };

  return (
    <div className="item-detail">
      {successMessage && (
        <div className="success-message">
          <span className="icon-check">✔</span> {successMessage}
        </div>
      )}
      <img src={image} alt={name} />
      <h2>{name || 'Sin nombre'}</h2>
      <p>Descripción: {description || 'Sin descripción disponible'}</p>
      <p>Precio unitario: ${price || 0}</p>
      <p>Stock disponible: {stock || 0}</p>
      <ItemCount stock={stock} quantity={quantity} onQuantityChange={setQuantity} />
      <div className="item-detail-buttons">
        <button onClick={handleAddToCart}>Agregar al carrito</button>
        <button className="remove-button" onClick={handleRemoveFromCart}>
          Quitar del carrito
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;








