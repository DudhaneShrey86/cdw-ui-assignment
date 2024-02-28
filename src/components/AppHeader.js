import React from 'react'
import '../styles/AppHeader.scss'

const AppHeader = ({ searchText, onSearchTextChange }) => {
  return (
    <header>
      <nav id="navbar">
        <a href='/' className='logo'>Team</a>
        <div className='search-div'>
          <span className='mdi mdi-magnify searchicon'></span>
          <input type='search' placeholder='Search' className='searchbar' value={searchText} onChange={(e) => onSearchTextChange(e.target.value)} />
        </div>
      </nav>
    </header>
  )
}

export default AppHeader