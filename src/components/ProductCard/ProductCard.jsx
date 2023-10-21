import React from 'react'
import './style.css'
import { IoMdAdd } from 'react-icons/io' 

const ProductCard = (props) =>{

  return(
    <section className="product-card">
      <img className="card-img" src={props.thumbnail} alt="text img" />
      <div className="decription-card">
        <h2>{props.title}</h2>
        <h3>{props.price}</h3>
      </div>
      <button type="button"><IoMdAdd/> Comprar</button>
    </section>
  )
}


export default ProductCard
