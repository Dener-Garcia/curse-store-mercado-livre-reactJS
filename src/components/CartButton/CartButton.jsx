import React, { useContext } from 'react'
import './style.css'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import AppContext from '../../context/AppContext'

const CartButton = () => {

  const {cartItems, isCartVisible, setIsCartVisible, shakeButton} = useContext(AppContext)

  const showSidebar = () =>{
    setIsCartVisible(!isCartVisible)
  }
  
  return (
    <button className={`cart-button ${shakeButton ? 'shakeAnimation' : ''}`} 
      type="button"
      onClick={showSidebar}>
      <AiOutlineShoppingCart/>
      {cartItems.length > 0 && <span>{cartItems.length}</span>}
    </button>
  )
}

export default CartButton
