import React from 'react'
import { useState } from 'react'
import './style.css'
import { BsSearch } from 'react-icons/bs'

import fetchProducs from '../../api/fetchProducts'

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('')

  const handleSearch = async (e) =>{ 
    e.preventDefault()
    const productsFromSearch = await fetchProducs(searchValue)
    setSearchValue('')
    console.log(productsFromSearch)
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
