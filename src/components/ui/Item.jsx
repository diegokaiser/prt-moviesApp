/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import BookmarkIco from '../../assets/images/icons/bookmark.svg'
import { Ranking } from './Ranking'

export function Item({
  id,
  title,
  poster,
  rank
}) {
  return (
    <>
      <div className="item">
        <div className="item__content">
          <Link 
            to={`/prt-moviesApp/movie/${id}`}
          >
            <figure>
              <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt={ title } />
              <button type="button">
                <img src={BookmarkIco} alt="" />
              </button>
            </figure>
            <h3>{ title }</h3>
            <Ranking 
              rank={rank}
            />
          </Link>
        </div>
      </div>
    </>
  )
}