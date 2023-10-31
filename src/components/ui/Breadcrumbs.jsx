/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"
import GoBack from '../../assets/images/goBack.svg'

export function Breadcrumbs({ title }) {
  const navigate = useNavigate()

  return (
    <>
      <div className="breadcrumbs">
        <div className="breadcrumbs__content">
          <button
            onClick={() => navigate(-1)}
          >
            <img src={GoBack} alt="Go back" />
          </button>
          <h2>{ title }<span>.</span></h2>
        </div>
      </div>
    </>
  )
}