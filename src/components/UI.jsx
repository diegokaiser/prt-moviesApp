import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Discover } from './pages/Discover'
import { Results } from './pages/Results'
import { Bookmarks } from './pages/Bookmarks'
import { Movie } from './pages/Movie'
import { Menubar } from './ui/Menubar'

export function UI() {
  return (
    <>
      <Routes>
        <Route path='/prt-moviesApp/' element={<Home />} />
        <Route path='/prt-moviesApp/discover' element={<Discover />} />
        <Route path='/prt-moviesApp/discover/:page/:genres' element={<Discover />} />
        <Route path='/prt-moviesApp/search' element={<Results />} />
        <Route path='/prt-moviesApp/bookmark' element={<Bookmarks />} />
        <Route path='/prt-moviesApp/movie/:id' element={<Movie />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Menubar />
    </>
  )
}