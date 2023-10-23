import React from 'react'
import './style.css'
import { useState, useEffect, useContext } from 'react'

import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import AppContext from '../../context/AppContext'

const Products = () =>{

  const { products, setProducts } = useContext(AppContext)

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
