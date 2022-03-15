import React, {useState, useEffect} from 'react'

const SearchInput = ({search_term, setSearchTerm}) => {
    
    
  
    const onInputChange = e => {
        // on new letter or term typed in it will modify the value of the input tag bellow
        setSearchTerm(e.target.value);
    }
  
    return (
    <div>
        <label htmlFor=''>Search:</label>
        <input type='search'
        value={search_term}
        placeholder='search an agent' onChange={onInputChange}/>


    </div>
  )
}

export default SearchInput