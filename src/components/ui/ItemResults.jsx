/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Ranking } from "./Ranking";
import { Synopsis } from "./Synopsis";
import BookmarkIco from '../../assets/images/icons/bookmark.svg'
import DefaultPoster from '../../assets/images/defaultPoster.png'

export function ItemResults({
  id,
  title,
  poster,
  rank,
  overview
}) {
  return (
    <>
      <div className="ritem">
        <div className="ritem__content">
          <Link
            to={`/prt-moviesApp/movie/${id}`}
          >
            <figure>
              {
                poster !== null ?
                <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} /> :
                <img src={DefaultPoster} alt={title} />
              }
              <button type="button">
                <img src={BookmarkIco} alt="" />
              </button>
            </figure>
            <div className="ritem__data">
              <h3>{title}</h3>
              <Ranking rank={rank} />
              <Synopsis overview={overview} />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}