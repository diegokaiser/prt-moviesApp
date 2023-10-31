import { TopFive } from '../ui/TopFive';
import { LatestMovie } from '../ui/LatestMovie';

export function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <TopFive />
        <LatestMovie />
      </div>
    </div>
  )
}