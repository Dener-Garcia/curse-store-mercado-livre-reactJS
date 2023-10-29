import React from 'react'
import { useState } from 'react'  
import AppContext from './AppContext'

const Provider = (props) => {


  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [shakeButton, setShakeButton] = useState(false)
  const [imgStateNull, setImgStateNull] = useState(true)

  const globalStates = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    shakeButton,
    setShakeButton,
    imgStateNull,
    setImgStateNull
  }

  return(
    <AppContext.Provider value={globalStates}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Provider
