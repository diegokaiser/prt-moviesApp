import { Ranking } from './Ranking'

export function Item() {
  return (
    <>
      <div className="item">
        <div className="item__content">
          <figure>
            <img src="" alt="" />
          </figure>
          <h3>Hitman’s Wife’s Bodyguard</h3>
          <Ranking />
        </div>
      </div>
    </>
  )
}