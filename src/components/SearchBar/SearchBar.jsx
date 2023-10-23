import React, { useState } from 'react'
import { useContext } from 'react'
import './style.css'
import { BsSearch } from 'react-icons/bs'

import fetchProducs from '../../api/fetchProducts'
import AppContext from '../../context/AppContext'

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('')

  const { setProducts } = useContext(AppContext)

  const handleSearch = async (e) =>{ 
    e.preventDefault()
    const productsFromSearch = await fetchProducs(searchValue)
    setSearchValue('')
    setProducts(productsFromSearch)
  }
  
  return(
    <>
      <form className="search-bar" 
        action="" 
        onSubmit={handleSearch}>

        <input className="search-input" 
          type="search"
          placeholder="Buscar produtos"
          value={searchValue}
          required 
          onChange={({ target }) => setSearchValue(target.value)}/>
        
        <button className="btn-search" type="submit"><BsSearch/></button>
      
      </form>
    </>
  )
}

export default SearchBar
