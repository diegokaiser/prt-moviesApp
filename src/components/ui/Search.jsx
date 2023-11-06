/* eslint-disable react/prop-types */

import { useState } from 'react'
import SearchIco from '../../assets/images/search.svg'

export function Search({ handleSearch }) {
  const [input, setInput] = useState(false)
  const [keyword, setKeyword] = useState('')

  const handleOnChange = (e) => {
    setKeyword(e.target.value)
    if(e.target.value.length >= 3) {
      setInput(true)
    } else {
      setInput(false)
    }
  }

  return (
    <>
      <div className="search">
        <div className="search__content">
          <img src={SearchIco} alt="Search..." />
          <input 
            type="text" 
            placeholder="Search..."
            onChange={handleOnChange}
          />
          <button
            className={input ? 'active' : ''}
            type='button'
            onClick={(e) => handleSearch(e, keyword)}
          >
            Search
          </button>
        </div>
      </div>
    </>
  )
}