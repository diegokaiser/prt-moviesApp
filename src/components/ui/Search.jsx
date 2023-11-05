import SearchIco from '../../assets/images/search.svg'

export function Search() {
  return (
    <>
      <div className="search">
        <div className="search__content">
          <img src={SearchIco} alt="Search..." />
          <input 
            type="text" 
            placeholder="Search..."
          />
          <button
          >
            Clear
          </button>
        </div>
      </div>
    </>
  )
}