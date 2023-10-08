import React, { useState } from 'react';

function PriceFilter() {
  const [maxPrice, setMaxPrice] = useState(200);

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };

  return (
    <div className="price-bar">
      <input
        type="range"
        min="0"
        max="200"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        step="1"
        className="range-input"
      />
      <div className="price-range">
        <div className="max-price">Max: {maxPrice} $</div>
      </div>
    </div>
  );
}

export default PriceFilter;