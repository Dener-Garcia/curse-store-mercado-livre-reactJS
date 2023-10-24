
import React from 'react'
import './style.css'
import { MdOutlineDeleteOutline } from 'react-icons/md'


const CartItem = (props) => {
  return(
    <section className="cart-item">
      <img
        src={props.thumbnail}
        alt={props.title}
      />
      <div className="cart-item-content">
        <h2 className="cart-item-title">{props.title}</h2>
        <h3 className="cart-item-price">{props.price}</h3>
        <button className="btn-cart-item-remove" type="button">
          <MdOutlineDeleteOutline/>
        </button>
      </div>
    </section>
  )
}

export default CartItem
