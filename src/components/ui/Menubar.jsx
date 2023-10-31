import HomeIco from '../../assets/images/icons/home.svg'
import SearchIco from '../../assets/images/icons/search.svg'
import BookmarkIco from '../../assets/images/icons/bookmark.svg'

export function Menubar() {
  return (
    <div className="menubar">
      <div className="menubar__content">
        <button 
          type="button"
        >
          <img src={HomeIco} alt="" />
        </button>
        <button 
          type="button"
        >
          <img src={SearchIco} alt="" />
        </button>
        <button 
          type="button"
        >
          <img src={BookmarkIco} alt="" />
        </button>
      </div>
    </div>
  )
}