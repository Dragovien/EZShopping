import React, { useState } from 'react';

const ProductCard = ({ title, description, category, price, imageSrc }) => {

  const [quantity, setQuantity] = useState(1);

  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  }

  return (
    <div className="productCard">
      <div className='cardContent'>
        <img src={imageSrc} alt={title} />
        <div className="cardTextWrapper">
          <h2 className="cutText">{title}</h2>
          <div className="categoryChip">{category}</div>
          <div className="cutText">{description}</div>
          <h3>{price}$</h3>
        </div>
      </div>
      <div className="cardFooter">
        Quantity : <input value={quantity} onChange={quantityHandler}></input>
        <button className="orangeButton">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
