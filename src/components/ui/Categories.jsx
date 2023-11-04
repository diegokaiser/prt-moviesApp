/* eslint-disable react/prop-types */

import { useQuery } from '@tanstack/react-query'
import { getGenres } from '../../hooks/useFetch'
import { Loading } from '../elements/Loading'
import { Error } from '../elements/Error'

export function Categories({ listMode }) {
  let categories
  const { status, data } = useQuery({
    queryKey: ['categories'],
    queryFn: getGenres
  })

  if(status === 'success') {
    categories = [...data.genres]
  }

  return (
    <>
      <div className="categories">
        <div className="categories__content">
          {
            status === 'success' ?
            <>
              {
                listMode ?
                <>
                  {
                    categories.map((category) => {
                      return (
                        <span
                          key={category.id}
                        >
                          {category.name}
                        </span>
                      )
                    })
                  }
                </> :
                <>
                <button type="button" className='active'>All</button>
                  {
                    categories.map((category) => {
                      return (
                        <button
                          key={category.id}
                          type='button'
                        >
                          {category.name}
                        </button>
                      )
                    })
                  }
                </>
              }
            </> :
            <Loading />
          }
        </div>
      </div>
    </>
  )
}