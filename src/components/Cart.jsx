import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addProductToCart } from '../stores/slices/shopSlice'

const cartProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const isDark = useSelector((state) => state.user.darkMode)

  const productCardStyle = {
    backgroundColor: isDark ? '#343434' : 'white',
    color: isDark ? 'white' : 'black',
  }
  console.log(product)
  return (
    <div className="productCard" style={productCardStyle}>
      <div className='cardContent'>
        <img src={product.image} alt={product.title} />
        <div className="cardTextWrapper">
          <h2 className="cutText">{product.title}</h2>
          <div className="categoryChip">{product.category}</div>
          <div className="cutText">{product.description}</div>
          <h3>{product.price}$</h3>
        </div>
      </div>
      <div className="cardFooter">
        Quantity : {product.quantity}
        
      </div>
    </div>
  );
};

export default cartProductCard;
