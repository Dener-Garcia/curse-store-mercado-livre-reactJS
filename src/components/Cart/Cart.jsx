import React, { useContext } from 'react'
import './style.css'
import CartItem from '../CartItem/CartItem'
import AppContext from '../../context/AppContext'

const Cart = () =>{

  const { cartItems } = useContext(AppContext)

  console.log(cartItems, 'item recebido no carrinho')

  return(

    <section className="cart">

      <div className="cart-items">

        {cartItems.map((cartItem)=>{
          <CartItem key={cartItem.id} data={cartItem}/>}
        )}

      </div>

      <div className="cart-resume">
        Resumo dos valores do carrinho 
      </div>

    </section>
  )
}

export default Cart
