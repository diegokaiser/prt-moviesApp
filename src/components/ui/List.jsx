export function List({ children }) {
  return (
    <>
      <div className="list">
        <div className="list__content">
          {children}
        </div>
      </div>
    </>
  )
}