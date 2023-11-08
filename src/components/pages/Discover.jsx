import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovies } from '../../hooks/useFetch'
import { Breadcrumbs } from '../ui/Breadcrumbs'
import { Categories } from '../ui/Categories'
import { List } from '../ui/List'
import { Item } from '../ui/Item'
import { Loading } from '../elements/Loading'
import { Error } from '../elements/Error'
import { Pagination } from '../ui/Pagination'
import { useState } from 'react'

export function Discover() {
  const navigate = useNavigate()
  let title = 'Discover'
  let { page, genres } = useParams()
  let movies

  const { status, data } = useQuery(
    ['movies', page, genres],
    () => getMovies(page, genres)
  )

  if(status === 'success') {
    movies = [...data.results]
    console.log(data)
  }

  const getGenre = (e, genres) => {
    e.preventDefault()
    let buttons = document.querySelectorAll('.categories__content button')
    buttons.forEach((button) => {
      button.classList.remove('active')
    })
    e.target.classList.add('active')
    navigate(`/discover/${page}/${genres}`)
  }

  const getPag = (e, page) => {
    e.preventDefault()
    console.log(page)
    navigate(`/discover/${page}/${genres}`)
  }

  return (
    <>
      <div className="discover">
        <div className="discover__content">
          <Breadcrumbs title={title} />
          <Categories 
            listMode={false}
            handleFilter={getGenre}
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
                {
                  <Pagination 
                    page={page}
                    count={500}
                    handlePag={getPag}
                  />
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