import React from 'react'
import { useState } from 'react'  
import AppContext from './AppContext'

const Provider = (props) => {

  const [products, setProducts] = useState([])

  const globalStates = {
    products,
    setProducts
  }

  return(
    <AppContext.Provider value={globalStates}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Provider
