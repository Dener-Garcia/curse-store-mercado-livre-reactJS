import React from 'react'
import './style.css'
import { IoMdAdd } from 'react-icons/io' 
import formatCurrency from '../../utils/formatCurrency'

const ProductCard = (props) =>{

  console.log(props.price)

  return(
    <section className="product-card">
      <img className="card-img" src={props.thumbnail.replace(/\w\.jpg/gi, 'W.Jpg')} alt={props.title} />
      <div className="decription-card">
        <h2>{props.title}</h2>
        <h3>{formatCurrency(props.price)}</h3>
      </div>
      <button type="button"><IoMdAdd/> Comprar</button>
    </section>
  )
}


export default ProductCard
