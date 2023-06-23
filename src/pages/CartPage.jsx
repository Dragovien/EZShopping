import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../stores/slices/shopSlice';
import Cart from '../components/Cart';

function CartPage() {
  const cartItems = useSelector((state) => state.shop.userCart);
  const cartItemsQuantity = cartItems.length;
  const [stackedCartItems, setStackedCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)


  const clearCartHandler = () => {
    setStackedCartItems([]);
    dispatch(clearCart());
  };

  const validateCartHandler = () => {
    setStackedCartItems([]);
    dispatch(clearCart());
    window.alert('Shopping cart validated, you are going to be redirected to the payment page')
  };

  useEffect(() => {
    let stackedItems = [];
    cartItems.forEach((item) => {
      if (!stackedItems.some((stackedItem) => stackedItem.id === item.id)) {
        const newItem = { ...item, quantity: 1 }; // Create a new object with the 'quantity' property
        stackedItems.push(newItem);
      } else {
        const duplicateItem = stackedItems.find((duplicate) => item.id === duplicate.id);
        duplicateItem.quantity++; // Increment the 'quantity' property of the existing item
      }
    });
    setStackedCartItems(stackedItems);

  }, [cartItems]);

  useEffect(() => {
    const sum = stackedCartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalPrice(sum)
  }, [stackedCartItems]);


  const dispatch = useDispatch();

  let savedName = JSON.parse(localStorage.getItem('firstName'));
 

  return (
    <>
      <div className='cartPage'>
        <h2>
          Hi {savedName ? savedName : 'User'} !
        </h2>

        {cartItemsQuantity === 0
          && <p>
            You don't have any item in your cart
          </p>}
        {cartItemsQuantity > 0 && (
          <p>
            There {cartItemsQuantity > 1 ? 'are' : 'is'} {cartItemsQuantity}{' '}
            {cartItemsQuantity > 1 ? 'items' : 'item'} in your basket
          </p>
        )}

        <button className="orangeButton" onClick={clearCartHandler}>
          Clear basket
        </button>

        <hr />

        <div className="productsWrapper">
          {stackedCartItems.map((item, index) => (
            <Cart
              key={index}
              product={item}
              title={item.title}
              category={item.category}
              description={item.description}
              price={item.price}
              imageSrc={item.image}
            />

          ))}
        </div>

        {
          stackedCartItems.length > 0
          &&
          <div>
            <p className='price'>Total: ${
              totalPrice.toFixed(2)
            }</p>
            <button onClick={validateCartHandler} className='orangeButton validateButton'>Validate your cart</button>
          </div>

        }

      </div>

    </>
  );
}

export default CartPage;
