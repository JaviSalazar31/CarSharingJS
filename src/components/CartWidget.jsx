import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget({ className }) {
  return (
    <div className={`cart-widget ${className}`}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
}

export default CartWidget;


