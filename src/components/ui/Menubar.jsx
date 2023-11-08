import HomeIco from '../../assets/images/icons/home.svg'
import SearchIco from '../../assets/images/icons/search.svg'
import BookmarkIco from '../../assets/images/icons/bookmark.svg'
import { Link } from 'react-router-dom'

export function Menubar() {
  return (
    <div className="menubar">
      <div className="menubar__content">
        <Link 
          to={'/prt-moviesApp/'}
        >
          <img src={HomeIco} alt="" />
        </Link>
        <Link 
          to={'/prt-moviesApp/search'}
        >
          <img src={SearchIco} alt="" />
        </Link>
        <Link 
          to={'/prt-moviesApp/bookmark'}
        >
          <img src={BookmarkIco} alt="" />
        </Link>
      </div>
    </div>
  )
}