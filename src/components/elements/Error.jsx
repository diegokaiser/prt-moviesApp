export function Error({error}) {
  return (
    <div className="alerts">
      <div className="alerts__content">
        <p>{error}</p>
      </div>
    </div>
  )
}

export default Error