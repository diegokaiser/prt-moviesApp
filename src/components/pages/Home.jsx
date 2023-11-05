import { TopFive } from '../ui/TopFive';
import { LatestMovie } from '../ui/LatestMovie';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <TopFive />
        <LatestMovie />
        <Link
          to={'/prt-moviesApp/discover'}
          state={{ title: 'Discover' }}
          className='btn-link'
        >
          See all movies
        </Link>
      </div>
    </div>
  )
}