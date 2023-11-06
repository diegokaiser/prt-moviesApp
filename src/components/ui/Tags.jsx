/* eslint-disable react/prop-types */

export function Tags({ genres }) {
  
  return (
    <div className="tags">
      <div className="tags__content">
        {
          genres.map(genre => {
            return (
              <span
                key={genre.id}
              >
                {genre.name}
              </span>
            )
          })
        }
      </div>
    </div>
  )
}