import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { getMovies } from '../../hooks/useFetch'
import { getMovieByGenre } from '../../hooks/useFetch'
import { Breadcrumbs } from '../ui/Breadcrumbs'
import { Categories } from '../ui/Categories'
import { List } from '../ui/List'
import { Item } from '../ui/Item'
import { Loading } from '../elements/Loading'
import { Error } from '../elements/Error'

export function Discover() {
  let { state } = useLocation()
  let movies
  const { status, data } = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies
  })

  if(status === 'success') {
    movies = [...data.results]
  }

  const onFilter = (e, genre) => {
    e.preventDefault()
    console.log(genre.toLowerCase())
  }

  return (
    <>
      <div className="discover">
        <div className="discover__content">
          <Breadcrumbs title={state.title} />
          <Categories 
            listMode={false}
            handleFilter={onFilter}
          />
          <List>
            {
              status === 'success' ?
              <>
                {
                  movies.map((movie) => {
                    return (
                      <Item 
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster={movie.poster_path}
                        rank={movie.vote_average}
                      />
                    )
                  })
                }
              </> :
              <Loading />
            }
          </List>
        </div>
      </div>
    </>
  )
}