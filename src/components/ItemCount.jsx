import React from 'react';

function ItemCount({ stock, quantity = 1, onQuantityChange }) {
  const handleDecrement = () => {
    if (quantity > 1) onQuantityChange(quantity - 1);
  };

  const handleIncrement = () => {
    if (quantity < stock) onQuantityChange(quantity + 1);
  };

  return (
    <div className="item-count">
      <button onClick={handleDecrement} disabled={quantity <= 1}>
        -
      </button>
      <span>{quantity || 1}</span>
      <button onClick={handleIncrement} disabled={quantity >= stock}>
        +
      </button>
    </div>
  );
}

export default ItemCount;





