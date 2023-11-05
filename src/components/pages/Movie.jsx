import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMovieById } from '../../hooks/useFetch';
import { Ranking } from '../ui/Ranking';
import { Tags } from '../ui/Tags'
import { Synopsis } from '../ui/Synopsis'
import { Loading } from '../elements/Loading';
import GoBack from '../../assets/images/goBack.svg'
import BookmarkIco from '../../assets/images/icons/bookmark.svg'

export function Movie() {
  const navigate = useNavigate()
  let { id } = useParams()
  const { status, data } = useQuery(
    ['movie', id], () => getMovieById(id)
  )

  return (
    <>
      <div className="movie">
        <div className="movie__content">
          {
            status === 'success' ?
            <>
              <div className="item">
                <div className="item__actions">
                  <button
                    onClick={() => navigate(-1)}
                  >
                    <img src={GoBack} alt="Go Back" />
                  </button>
                  <button>
                    <img src={BookmarkIco} alt="Bookmark" />
                  </button>
                </div>
                <div className="item__poster">
                  <figure>
                    <img 
                      src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} 
                      alt={data.title}
                    />
                  </figure>
                </div>
                <div className="item__data">
                  <h2>{data.title}</h2>
                  <Ranking 
                    rank={data.vote_average} 
                  />
                  <Tags genres={data.genres} />
                  <Synopsis 
                    overview={data.overview}
                  />
                </div>
              </div>
            </> :
            <Loading />
          }
        </div>
      </div>
    </>
  )
}