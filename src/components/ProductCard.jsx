import React from 'react';

const ProductCard = ({ title, description, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
