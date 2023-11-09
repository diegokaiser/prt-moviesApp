import {
  auth,
  googleProvider
} from '../../config/firebase.config'
import {
  onAuthStateChanged
} from 'firebase/auth'
import { useEffect, useState } from 'react'
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

export function Discover() {
  const navigate = useNavigate()
  let title = 'Discover'
  let { page, genres } = useParams()
  let movies
  const [userObj, setUserObj] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserObj({...user})
      } else {
        setUserObj({})
      }
    })
  }, [])

  const { status, data } = useQuery(
    ['movies', page, genres],
    () => getMovies(page, genres)
  )

  if(status === 'success') {
    movies = [...data.results]
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
                        userObj={userObj}
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