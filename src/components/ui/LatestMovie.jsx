import { useQuery } from '@tanstack/react-query'
import { getLatestID } from '../../hooks/useFetch'
import { Loading } from '../elements/Loading'
import { Error } from '../elements/Error'
import { Ranking } from './Ranking'
import { Tags } from './Tags'
import { Synopsis } from './Synopsis'
import DefaultPoster from '../../assets/images/defaultPoster.png'
import BookmarkIco from '../../assets/images/icons/bookmark.svg'

export function LatestMovie() {
  const { status, data } = useQuery({
    queryKey: ['latest'],
    queryFn: getLatestID
  })

  return (
    <div className="latestMovie">
      <div className="latestMovie__content">
        <h2>Latest<span>.</span></h2>
        {
          status === 'success' ?
          <>
            <div className="item">
              <figure>
                {
                  data.poster_path !== null ?
                  <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.title} /> :
                  <img src={DefaultPoster} alt={data.title} />
                }
                <button type="button">
                  <img src={BookmarkIco} alt="" />
                </button>
              </figure>
              <div className="item__data">
                <h3>{ data.title }</h3>
                {
                  data.vote_average !== 0 &&
                  <Ranking  
                    rank={data.vote_average}
                  />
                }
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
  )
}