import axios from "axios"

const baseAPI = axios.create({
  method: 'GET',
  baseURL: '//api.themoviedb.org/3/',
  params: {
    include_adult: true,
    language: 'en-US'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDIzYzkwNWJkMDA3ODJkY2IyYzMwMjg0NzEyZTA2MSIsInN1YiI6IjY1NDAwNzM3MTA5Y2QwMDE0ZGY1ZDdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uvuy29_mOo2tRj2SsyRjaICu55keko6j-EQi5mStPQk'
  }
})

export const getMovies = async (page, genres) => {
  const res = await baseAPI.get(`/discover/movie?page=${page}&with_genres=${genres}`)
  return res.data
}

export const getTopFive = async () => {
  const res = await baseAPI.get(`/trending/movie/day`)
  return res.data
}

export const getLatestID = async () => {
  const res = await baseAPI.get(`/movie/latest`)
  return res.data
}

export const getGenres = async () => {
  const res = await baseAPI.get(`/genre/movie/list`)
  return res.data
}

export const getMovieById = async (id) => {
  const res = await baseAPI.get(`/movie/${id}`)
  return res.data
}

export const getMovieByKeyword = async (keyword) => {
  const res = await baseAPI.get(`/search/movie?query=${keyword}`)
  return res.data
}
