import React from 'react'
import './style.css'
import { useState, useEffect } from 'react'

import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'

const Products = () =>{

  const [products, setProducts] = useState('')

  useEffect(() => {
    fetchProducts('iphone')
      .then((response)=>{
        setProducts(response)
      })

  }, [])
  
  console.log('renderizou', products)
  return(
    <section className="container products">
      <ProductCard
        thumbail={products.thumbail} 
        title={products.title}
        price={products.price}/>
    </section>
  )
}

export default Products
