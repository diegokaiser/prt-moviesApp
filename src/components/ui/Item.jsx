/* eslint-disable react/prop-types */

import { Ranking } from './Ranking'
import BookmarkIco from '../../assets/images/icons/bookmark.svg'

export function Item({
  title,
  poster,
  rank
}) {
  return (
    <>
      <div className="item">
        <div className="item__content">
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
        </div>
      </div>
    </>
  )
}