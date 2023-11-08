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
        <Route path='/' element={<Home />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/discover/:page/:genres' element={<Discover />} />
        <Route path='/search' element={<Results />} />
        <Route path='/bookmark' element={<Bookmarks />} />
        <Route path='/movie/:id' element={<Movie />} />
      </Routes>
      <Menubar />
    </>
  )
}