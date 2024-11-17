import React, { useState } from 'react';

function Filter({ onFilter }) {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    onFilter({ brand: selectedBrand, minPrice, maxPrice });
  };

  return (
    <div className="filter-container">
      <h3>Filtrar por</h3>
      <div className="filter-group">
        <label htmlFor="brand">Marca:</label>
        <select
          id="brand"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">Todas</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Huawei">Huawei</option>
          <option value="Motorola">Motorola</option>
          <option value="Realme">Realme</option>
          <option value="OnePlus">OnePlus</option>
          <option value="Google">Google</option>
          <option value="Asus">Asus</option>
          <option value="Sony">Sony</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="min-price">Precio mínimo:</label>
        <input
          id="min-price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="max-price">Precio máximo:</label>
        <input
          id="max-price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <button onClick={handleFilter} className="filter-button">
        Aplicar
      </button>
    </div>
  );
}

export default Filter;
