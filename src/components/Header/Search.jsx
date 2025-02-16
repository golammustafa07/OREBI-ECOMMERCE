import React from 'react'

const Search = ({placeholder,className}) => {
  return (
    <div>
        <input type="text" placeholder={placeholder} className={className} />
    </div>
  )
}

export default Search