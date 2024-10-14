// src/components/CartWidget.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
}

export default CartWidget;
