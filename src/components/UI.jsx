import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Discover } from './pages/Discover'
import { Results } from './pages/Results';
import { Menubar } from './ui/Menubar';

export function UI() {
  return (
    <>
      <Routes>
        <Route path='/prt-moviesApp/' element={<Home />} />
        <Route path='/prt-moviesApp/discover' element={<Discover />} />
        <Route path='/prt-moviesApp/search' element={<Results />} />
      </Routes>
      <Menubar />
    </>
  )
}