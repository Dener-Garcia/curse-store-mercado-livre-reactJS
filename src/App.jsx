import React from 'react'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Provider from './context/Provider'
import Cart from './components/Cart/Cart'
import ImageStateNull from './components/ImageStateNull/ImageStateNull'

function App() {

  return (
    <Provider>
      <Header />
      <ImageStateNull />
      <Products />
      <Cart />
    </Provider>
  )
}

export default App
