
import React, { useContext } from 'react'
import './style.css'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import formatCurrency from '../../utils/formatCurrency'
import AppContext from '../../context/AppContext'


const CartItem = (props) => {

  const { cartItems, setCartItems } = useContext(AppContext)

  const handleRemove = () => {
    const updateItemsCart = cartItems.filter((item) => item.id != item.id)
    setCartItems(updateItemsCart)
    console.log(updateItemsCart)
  }

  return(
    <section className="cart-item">
      <img
        src={props.thumbnail}
        alt={props.title}
      />
      <div className="cart-item-content">
        <h2 className="cart-item-title">{props.title}</h2>
        <h3 className="cart-item-price">{formatCurrency(props.price, 'BRL')}</h3>
        <button className="btn-cart-item-remove" 
          type="button"
          onClick={handleRemove}
        >
          <MdOutlineDeleteOutline/>
        </button>
      </div>
    </section>
  )
}

export default CartItem
