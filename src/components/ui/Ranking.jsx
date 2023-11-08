/* eslint-disable react/prop-types */

import Star from '../../assets/images/star.svg'
import HalfStar from '../../assets/images/halfstar.svg'
import NoStart from '../../assets/images/nostar.svg'

export function Ranking({ rank }) {

  return (
    <div className="ranking">
      <div className="ranking__content">
        { 
          Math.round(rank * 10) / 10
        }
        <div className="stars">
          {
            rank > 0 && rank <= 2 ?
            <>
              <img src={Star} alt="" />
              <img src={NoStart} alt="" />
              <img src={NoStart} alt="" />
              <img src={NoStart} alt="" />
              <img src={NoStart} alt="" />    
            </> :
            rank > 2 && rank <= 3 ?
            <>
              <img src={Star} alt="" />
              <img src={HalfStar} alt="" />
              <img src={NoStart} alt="" />
              <img src={NoStart} alt="" />
              <img src={NoStart} alt="" />
            </> :
            rank > 3 && rank <= 4 ?
            <>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={NoStart} alt="" />
              <img src={NoStart} alt="" />
              <img src={NoStart} alt="" />
            </> :
            rank > 4 && rank <= 5 ?
            <>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={HalfStar} alt="" />
              <img src={NoStart} alt="" />
              <img src={NoStart} alt="" />
            </> :
            rank > 5 && rank <= 6 ?
            <>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={NoStart} alt="" />
              <img src={NoStart} alt="" />
            </> :
            rank > 6 && rank <= 7 ?
            <>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={HalfStar} alt="" />
              <img src={NoStart} alt="" />
            </> :
            rank > 7 && rank <= 8 ?
            <>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={NoStart} alt="" />
            </> :
            rank > 8 && rank <= 9 ?
            <>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={HalfStar} alt="" />
            </> :
            rank === 10 ?
            <>
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </> :
            ''
          }
        </div>
      </div>
    </div>
  )
}