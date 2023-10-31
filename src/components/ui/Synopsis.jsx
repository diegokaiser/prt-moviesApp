/* eslint-disable react/prop-types */

export function Synopsis({ overview }) {
  return (
    <div className="synopsis">
      <div className="synopsis__content">
        <p>
          {overview}
        </p>
      </div>
    </div>
  )
}