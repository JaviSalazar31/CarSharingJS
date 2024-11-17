import Item from './Item';

function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.length > 0 ? (
        products.map((product) => <Item key={product.id} {...product} />)
      ) : (
        <p>No hay productos disponibles con los filtros seleccionados.</p>
      )}
    </div>
  );
}

export default ItemList;
