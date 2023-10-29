import React, { useContext } from 'react'
import './style.css'
import { IoMdAdd } from 'react-icons/io' 
import formatCurrency from '../../utils/formatCurrency'
import AppContext from '../../context/AppContext'

const ProductCard = (props) =>{

  const { cartItems, setCartItems, setShakeButton } = useContext(AppContext)

  const handleAddCart = () => {
    setCartItems([...cartItems, props])
    setShakeButton(true)
    setTimeout(() => {
      setShakeButton(false)
    }, 300)
  }


  return(
    <section className="product-card">
      <img className="card-img" src={props.thumbnail.replace(/\w\.jpg/gi, 'W.Jpg')} alt={props.title} />
      <div className="decription-card">
        <h2>{props.title}</h2>
        <h3>{formatCurrency(props.price, 'BRL')}</h3>
      </div>
      <button type="button"
        onClick={handleAddCart}>
        <IoMdAdd/> Comprar</button>
    </section>
  )
}


export default ProductCard
