import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import ItemList from './ItemList';
import Filter from './Filter';

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'productos'));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
        setFilteredProducts(items); 
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleFilter = ({ brand, minPrice, maxPrice }) => {
    let filtered = [...products];
    if (brand) {
      filtered = filtered.filter((product) => product.marca === brand);
    }
    if (minPrice) {
      filtered = filtered.filter((product) => parseFloat(product.precio) >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter((product) => parseFloat(product.precio) <= parseFloat(maxPrice));
    }
    setFilteredProducts(filtered);
  };

  return (
    <div className="products-container">
      <h2>{greeting}</h2>
      <div className="content">
        <Filter onFilter={handleFilter} />
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <ItemList products={filteredProducts} />
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;



