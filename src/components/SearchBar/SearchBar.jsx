import React from 'react'
import './style.css'
import { BsSearch } from 'react-icons/bs'

import { useState } from 'react'

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('')

  console.log(searchValue)

  return(
    <>
      <form className="search-bar" action="">
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
