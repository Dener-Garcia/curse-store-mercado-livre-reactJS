import React from 'react'
import './style.css'
import { useEffect, useContext } from 'react'

import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import AppContext from '../../context/AppContext'

const Products = () =>{

  const { products, setProducts, loading, setLoading } = useContext(AppContext)

  useEffect(() => {
    fetchProducts('')
      .then((response)=>{
        setProducts(response)
        setLoading(false)
      })
  }, [])
  
  return(

    (loading ? <Loading/> : <section className="container products"> {
      products.map((product) => 
        <ProductCard key={product.id} 
          id={product.id}
          thumbnail={product.thumbnail} 
          title={product.title} 
          price={product.price}
        />)}
    </section>
    )
  )
}

export default Products
