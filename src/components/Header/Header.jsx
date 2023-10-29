import React from 'react'
import './style.css'
import SearchBar from '../SearchBar/SearchBar'
import CartButton from '../CartButton/CartButton'
import { FaStoreAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <section className="container-header">
        <FaStoreAlt className="store-icon" size={40} />
        <SearchBar />
        <CartButton/>
      </section>
      
    </header>
  )
}

export default Header
