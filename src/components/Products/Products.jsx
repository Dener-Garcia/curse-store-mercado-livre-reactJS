import React from 'react'
import './style.css'
import { useState, useEffect } from 'react'

import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'

const Products = () =>{

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts('arduino')
      .then((response)=>{
        setProducts(response)
        setLoading(false)
      })

  }, [])
  
  return(

    (loading ? <Loading/> : <section className="container products"> {
      products.map((product) => 
        <ProductCard key={product.id} 
          thumbnail={product.thumbnail} 
          title={product.title} 
          price={product.price}/>)}
    </section>
    )
  )
}

export default Products
