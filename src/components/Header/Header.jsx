import React from 'react'
import './style.css'
import SearchBar from '../SearchBar/SearchBar'
import CartButton from '../CartButton/CartButton'

const Header = () => {
  return (
    <header>
      <SearchBar />
      <CartButton/>
    </header>
  )
}

export default Header
