import { Ranking } from '../ui/Ranking';
import { Tags } from '../ui/Tags'
import { Synopsis } from '../ui/Synopsis'

export function Movie() {
  return (
    <>
      <div className="movie">
        <div className="movie__content">
          <h2></h2>
          <Ranking />
          <Tags />
          <Synopsis />
        </div>
      </div>
    </>
  )
}