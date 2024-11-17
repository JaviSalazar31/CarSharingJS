import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart">
      <h2>Resumen de su compra</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price} = $
                {(item.quantity * item.price).toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total: ${getTotalPrice().toFixed(2)}</p>
          <button onClick={handleCheckout}>Crear orden</button>
        </>
      )}
    </div>
  );
}

export default Cart;


