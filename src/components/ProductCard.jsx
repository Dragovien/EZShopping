import React from 'react';

const ProductCard = ({ title, description, category, price,imageSrc }) => {
  return (
    <div className="productCard">
      <img src={imageSrc} alt={title}/>
      <div className="cardTextWrapper">
        <h2 className="cutText">{title}</h2>
        <div className="categoryChip">{category}</div>
        <div className="cutText">{description}</div>
        <h3>{price}$</h3>
      </div>
    </div>
  );
};

export default ProductCard;
