import { Link } from 'react-router-dom';

function Item({ id, nombre, precio, imagen, descripcion }) {
  return (
    <div className="item">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>{descripcion}</p>
      <Link to={`/product/${id}`}>Ver Detalles</Link>
    </div>
  );
}

export default Item;

