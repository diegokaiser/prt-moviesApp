/* eslint-disable react/prop-types */

import { db } from '../../config/firebase.config'
import { Link, useNavigate } from 'react-router-dom'
import { Ranking } from './Ranking'
import { addDoc, collection } from 'firebase/firestore'

export function Item({
  id,
  title,
  userObj,
  poster,
  rank
}) {
  const collectionRef = collection(db, 'bookmarks')
  const navigate = useNavigate()

  const saveBookmark = async (e, id, poster, title, rank) => {
    e.preventDefault()
    if (Object.keys(userObj).length > 0) {
      e.target.classList.add('active')
      const newBookmark = {
        id: id,
        poster: poster,
        title: title,
        rank: rank,
        createdBy: userObj.uid,
        createdAt: Date.now()
      }
      await addDoc(collectionRef, newBookmark)
        .then(
          console.log(newBookmark)
        )
        .catch(error => {
          console.log(error)
        })
    } else {
      navigate('/bookmark')
    }
  }

  return (
    <>
      <div className="item">
        <div className="item__content">
          <Link 
            to={`/movie/${id}`}
          >
            <figure>
              <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt={ title } />
              <button 
                type="button"
                onClick={(e) => saveBookmark(e, id, poster, title, rank)}
              >
                <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15 23.8395C15.1824 23.9447 15.3894 24.0001 15.6 24C15.9182 23.9998 16.2233 23.8733 16.4483 23.6483C16.6733 23.4233 16.7998 23.1182 16.8 22.8V3.6C16.799 2.64554 16.4193 1.73047 15.7444 1.05557C15.0695 0.380661 14.1545 0.00104183 13.2 0H3.6C2.64554 0.00104183 1.73047 0.380661 1.05557 1.05557C0.380661 1.73047 0.00104183 2.64554 0 3.6V22.8C0.000114199 23.0106 0.0556293 23.2175 0.160972 23.3998C0.266315 23.5822 0.417778 23.7336 0.600156 23.839C0.782534 23.9443 0.989409 23.9998 1.20001 23.9999C1.41062 23.9999 1.61754 23.9446 1.8 23.8395L8.4 20.0332L15 23.8395ZM2 4C2 2.89542 2.89545 2 4 2H13C14.1046 2 15 2.89542 15 4V8V9V21.5L8.5 17.5L2 21.5V9V8V4Z" fill="white"/>
                </svg>
              </button>
            </figure>
            <h3>{ title }</h3>
            <Ranking 
              rank={rank}
            />
          </Link>
        </div>
      </div>
    </>
  )
}