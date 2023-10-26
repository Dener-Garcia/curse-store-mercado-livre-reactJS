import React, { useContext } from 'react'
import './style.css'
import CartItem from '../CartItem/CartItem'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'

const Cart = () =>{

  const { cartItems, isCartVisible } = useContext(AppContext)

  
  const totalCart = cartItems.reduce((acc, item)=>{
    return item.price + acc
  }, 0)

  return(

    <section className={`cart ${isCartVisible ? 'cartActive' : ''}`}>

      <div className="cart-items">

        {cartItems.map((item, i) => (
          <CartItem 
            key={i++}  
            thumbnail={item.thumbnail}
            title={item.title}
            price={item.price} 
          />
        ))}
      </div>
      
      <div className="cart-resume">
        <h3>Total no carrinho</h3>
        {formatCurrency(totalCart, 'brl')}
      </div>

    </section>
  )
}

export default Cart
