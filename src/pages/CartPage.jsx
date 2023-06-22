import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../stores/slices/shopSlice'
import Cart from '../components/Cart'


function CartPage() {

  const cartItems = useSelector((state) => state.shop.userCart)
  const cartItemsQuantity = useSelector((state) => state.shop.userCart).length
  const [stackedCartItems, setStackedCartItems] = useState([])

  const clearCartHandler = () => {
    setStackedCartItems([])
    dispatch(clearCart())
  }

  useEffect(() => {
    return () => {
      console.log('BEFORE', cartItems)
      let stackedItems = []
      cartItems.map((item) => {
        if (!stackedItems.some((stackedItem) => stackedItem.id === item.id)) {
          item = { ...item, quantity: 1 }
          stackedItems.push(item)
        } else {
          stackedItems.find(duplicate => item.id === duplicate.id).quantity++
        }
      })
      setStackedCartItems([...stackedItems]);
    }
  }, [])


  const dispatch = useDispatch()

  let savedName = localStorage.getItem("firstName");
  if (savedName) {
    savedName = savedName.slice(1, -1)
  }

  return (
    <>
      <h2>Hi {savedName ? savedName : 'User'}</h2>
      {
        cartItemsQuantity === 0 && <p>You don't have any item in your cart</p>
      }
      {
        cartItemsQuantity > 0 && <p>There {cartItemsQuantity > 1 ? 'are' : 'is'} {cartItemsQuantity} {cartItemsQuantity > 1 ? 'items' : 'item'} in your basket</p>
      }

      <button className="orangeButton" onClick={() => clearCartHandler()}>Clear basket</button>

      <div className="productsWrapper">
        {stackedCartItems.map((item, index) =>
          <Cart
            key={index}
            product={item}
            title={item.title}
            category={item.category}
            description={item.description}
            price={item.price}
            imageSrc={item.image} />
        )}
      </div>
    </>
  )
}

export default CartPage
