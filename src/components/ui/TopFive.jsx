import { useQuery } from '@tanstack/react-query'
import { getTopFive } from '../../hooks/useFetch'
import { Loading } from '../elements/Loading'
import { Error } from '../elements/Error'
import { List } from './List'
import { Item } from './Item'

export function TopFive() {
  const topfive = []
  const { status, data } = useQuery({
    queryKey: ['topfive'],
    queryFn: getTopFive
  })

  if(status === 'success') {
    for (let index = 0; index < 5; index++) {
      topfive.push(data.results[index])
    }
  }

  return (
    <div className="topfive">
      <div className="topfive__content">
        <h2>Top Five<span>.</span></h2>
        <List>
          {
            status === 'success' ?
            <>
              {
                topfive.map((movie) => {
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
  )
}