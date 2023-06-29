import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from './CartItems'
import { clearCart } from './utils/cartSlice'

const Cart = () => {
    const cartItems=useSelector(store=>store.cart.items)
    const dispatch=useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
  return (
    <div>Cart-{cartItems.length}
    {/* Add button=> Clear the cart */}
    <button
    onClick={()=>{handleClearCart()}}
    >Clear Cart</button>

    {/* <CartItems {...cartItems[0]}/>  
      */}

      {cartItems.map((element,index)=>{
        return <CartItems {...element}/>
      })}
    </div>

  )
}

export default Cart