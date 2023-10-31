import Star from '../../assets/images/star.svg'
import HalfStar from '../../assets/images/halfstar.svg'
import NoStart from '../../assets/images/nostar.svg'

export function Ranking() {
  return (
    <div className="ranking">
      <div className="ranking__content">
        3.5
        <div className="stars">
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={HalfStar} alt="" />
          <img src={NoStart} alt="" />
        </div>
      </div>
    </div>
  )
}