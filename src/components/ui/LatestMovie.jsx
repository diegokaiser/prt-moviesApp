import { Ranking } from './Ranking'
import { Categories } from './Categories'
import { Synopsis } from './Synopsis'

export function LatestMovie() {
  return (
    <div className="latestMovie">
      <div className="latestMovie__content">
        <h2>Latest<span>.</span></h2>
        <div className="item">
          <figure>
            <img src="" alt="" />
          </figure>
          <div className="item__data">
            <h3>Hitman’s Wife’s Bodyguard</h3>
            <Ranking />
            <Categories />
            <Synopsis />
          </div>
        </div>
      </div>
    </div>
  )
}