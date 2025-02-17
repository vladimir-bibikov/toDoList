import React from 'react'

const SearchItem = ({searchItem, setSearchItem}) => {
  return (
    <form className='searchItem' onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          role="searchbox"
          placeholder='find your task'
          value={searchItem}
          onChange={e => setSearchItem(e.target.value)}
        />
    </form>
  )
}

export default SearchItem