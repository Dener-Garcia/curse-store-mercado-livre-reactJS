import React from 'react'
import './style.css'
import { useState, useEffect } from 'react'

import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'

const Products = () =>{

  const [products, setProducts] = useState('')

  useEffect(() => {
    fetchProducts('arduino')
      .then((response)=>{
        setProducts(response)
      })

  }, [])
  
  return(

    <section className="container products">

      {products.map((product) => 
      <ProductCard key={products.id} 
      thumbnail={product.thumbnail} 
      title={product.title} 
      price={product.price}/>)}

    </section>
  )
}

export default Products
