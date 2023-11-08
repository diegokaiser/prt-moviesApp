/* eslint-disable react/prop-types */

import PrevIco from '../../assets/images/prev.svg'
import NextIco from '../../assets/images/next.svg'

export function Pagination({
  page,
  count,
  handlePag
}) {
  return (
    <div className="pagination">
      <div className="pagination__content">
        <ul>
          {
            page > 1 &&
            <>
              <li>
                <button
                  onClick={(e) => handlePag(e, page - 1)}
                >
                  <img src={PrevIco} alt="Prev" />
                </button>
              </li>
            </>
          }
          {
            page >= 5 &&
            <>
              <li>
                <button
                  onClick={(e) => handlePag(e, 1)}
                >
                  1
                </button>
              </li>
              <li>
                <span>...</span>
              </li>
            </>
          }
          <li className="selected">
            <span>{page}</span>
          </li>
          {
            page >= 5 &&
            <>
              <li>
                <span>...</span>
              </li>
              <li>
                <button
                  onClick={(e) => handlePag(e, count)}
                >
                  {count}
                </button>
              </li>
            </>
          }
          {
            page < count &&
            <li>
              <button
                onClick={(e) => handlePag(e, (page - 0) + 1)}
              >
                <img src={NextIco} alt="Next" />
              </button>
            </li>
          }
        </ul>
      </div>
    </div>
  )
}