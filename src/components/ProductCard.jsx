import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addProductToCart } from '../stores/slices/shopSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);
  const isDark = useSelector((state) => state.user.darkMode)

  const productCardStyle = {
    backgroundColor: isDark ? '#343434' : 'white',
    color: isDark ? 'white' : 'black',
  }

  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  }

  const addToCartHandler = () => {
    let productsToAdd = []
    for(let i = 0; i < quantity; i++) {
      productsToAdd.push(product)
    }
    dispatch(addProductToCart(productsToAdd))
  }

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
        Quantity : <input value={quantity} type='number' onChange={quantityHandler}></input>
        <button className="orangeButton" onClick={addToCartHandler}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
