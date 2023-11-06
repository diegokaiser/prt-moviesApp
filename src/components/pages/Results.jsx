import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMovieByKeyword } from '../../hooks/useFetch';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { Categories } from '../ui/Categories';
import { Search } from '../ui/Search';
import { List } from '../ui/List';
import { ItemResults } from '../ui/ItemResults';
import { Loading } from '../elements/Loading';
import { EmptyResults } from '../ui/EmptyResults';

export function Results() {
  let { state } = useLocation()
  const [query, setQuery] = useState('')
  const [enable, setEnable] = useState(false)
  let results
  
  const { status, data, isFetched } = useQuery(
    ['results', query],
    () => getMovieByKeyword(query),
    {
      enabled: enable
    }
  )

  if(status === 'success') {
    results = [...data.results]
  }

  const onFilter = (e, genre) => {
    e.preventDefault()
    console.log(genre.toLowerCase())
  }

  const handleSearch = (e, keyword) => {
    e.preventDefault()
    setQuery(keyword)
    setEnable(true)
  }

  return (
    <>
      <div className="results">
        <div className="results__content">
          <Breadcrumbs title={state.title} />
          <Search 
            handleSearch={handleSearch}
          />
          <Categories 
            listMode={false}
            handleFilter={onFilter}
          />
          {
            isFetched &&
            <div className="counter">
              {
                status === 'success' &&
                `Search results (${data.total_results})`
              }
            </div>
          }
          <List>
            {
              isFetched ?
              <>
                {
                  status === 'success' ?
                  <>
                    {
                      results.map(movie => {
                        return (
                          <ItemResults
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            poster={movie.poster_path}
                            rank={movie.vote_average}
                            overview={movie.overview}
                          />
                        )
                      })
                    }
                  </> :
                  <Loading />
                }
              </> :
              <>
                <EmptyResults />
              </>
            }
          </List>
        </div>
      </div>
    </>
  )
}