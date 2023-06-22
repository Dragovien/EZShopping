import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateCart } from '../stores/slices/shopSlice'

const cartProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const isDark = useSelector((state) => state.user.darkMode)
  const userCart = useSelector((state) => state.shop.userCart)

  const productCardStyle = {
    backgroundColor: isDark ? '#343434' : 'white',
    color: isDark ? 'white' : 'black',
  }

  const removeItemFromCartHandler = (product) => {
    // give cart without removed item
    const filteredCart = userCart.filter(item => item.id !== product.id)

    dispatch(updateCart(filteredCart))
  }

  return (
    <div className="productCard" style={productCardStyle}>
      <div className='cardContent '>
        <img src={product.image} alt={product.title} />
        <div className="cardTextWrapper">
          <h2 className="cutText">{product.title}</h2>
          <div className="categoryChip">{product.category}</div>
          <div className="cutText">{product.description}</div>
          <h3>${product.price}</h3>
        </div>
        <div className="cardFooter">
          <div>
            <b>Quantity : {product.quantity}</b>
          </div>
          <button className="orangeButton" onClick={() => removeItemFromCartHandler(product)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default cartProductCard;
