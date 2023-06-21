import { useSelector, useDispatch } from 'react-redux'


function Cart() {
  const cartItems = useSelector((state) => state.shop.userCart).length


  let savedName = localStorage.getItem("firstName");
  if(savedName) {
    savedName = savedName.slice(1, -1)
  }

  return (
    <>
      <h2>Hi {savedName ? savedName : 'User'}</h2>
      {
        cartItems === 0 && <p>You don't have any item in your cart</p>
      }
      {
        cartItems > 0 && <p>There {cartItems > 1 ? 'are' : 'is'} {cartItems} {cartItems > 1 ? 'items' : 'item'} in your basket</p>
      }
      
      <button className="orangeButton">Clear basket</button>
    </>
  )
}

export default Cart
