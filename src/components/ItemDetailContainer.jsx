import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'productos', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          
          setProduct({
            id: docSnap.id,
            name: data.nombre || 'Sin nombre',
            price: parseFloat(data.precio) || 0,
            image: data.imagen || '',
            description: data.descripcion || 'Sin descripción disponible',
            stock: parseInt(data.stock, 10) || 0,
          });
        } else {
          console.error('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return <ItemDetail {...product} />;
}

export default ItemDetailContainer;


