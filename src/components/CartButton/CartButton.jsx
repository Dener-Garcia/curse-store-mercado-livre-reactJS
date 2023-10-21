import React from 'react'
import './style.css'

import { AiOutlineShoppingCart } from 'react-icons/ai'

const CartButton = () => {
  return (
    <button className="cart-button" type="button"><AiOutlineShoppingCart/>
      <span>1</span>
    </button>
  )
}

export default CartButton
