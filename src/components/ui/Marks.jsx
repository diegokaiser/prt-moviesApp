/* eslint-disable react/prop-types */

import { db } from '../../config/firebase.config'
import { 
  collection, 
  getDocs,
  orderBy,
  query,
  where
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Ranking } from '../../components/ui/Ranking'
import { EmptyResults } from './EmptyResults';

export function Marks({ 
  userObj,
  logOut
}) {
  const [marks, setMarks] = useState([])
  const userId = userObj.uid

  const getBookmarks = async () => {
    const collectionRef = collection(db, 'bookmarks')
    const whereUserId = where('createdBy', '==', userId)
    const q = query(collectionRef, whereUserId, orderBy('createdAt', 'desc'))
    try {
      const data = await getDocs(q)
      const dataArr = data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setMarks(dataArr)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBookmarks()
  }, [])

  return (
    <>
      <div className="marks">
        <div className="marks__content">
          {
            marks.length > 0 ?
            <>
              {
                marks.map(mark => {
                  return (
                    <div 
                      key={ mark.id }
                      className="item"
                    >
                      <div className="item__content">
                        <Link
                          to={`/movie/${ mark.id }`}
                        >
                          <figure>
                            <img src={`https://image.tmdb.org/t/p/original/${ mark.poster }`} alt={ mark.title } />
                            <button type="button">
                              <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15 23.8395C15.1824 23.9447 15.3894 24.0001 15.6 24C15.9182 23.9998 16.2233 23.8733 16.4483 23.6483C16.6733 23.4233 16.7998 23.1182 16.8 22.8V3.6C16.799 2.64554 16.4193 1.73047 15.7444 1.05557C15.0695 0.380661 14.1545 0.00104183 13.2 0H3.6C2.64554 0.00104183 1.73047 0.380661 1.05557 1.05557C0.380661 1.73047 0.00104183 2.64554 0 3.6V22.8C0.000114199 23.0106 0.0556293 23.2175 0.160972 23.3998C0.266315 23.5822 0.417778 23.7336 0.600156 23.839C0.782534 23.9443 0.989409 23.9998 1.20001 23.9999C1.41062 23.9999 1.61754 23.9446 1.8 23.8395L8.4 20.0332L15 23.8395ZM2 4C2 2.89542 2.89545 2 4 2H13C14.1046 2 15 2.89542 15 4V8V9V21.5L8.5 17.5L2 21.5V9V8V4Z" fill="white"/>
                              </svg>
                            </button>
                          </figure>
                          <h3>{ mark.title }</h3>
                          <Ranking 
                            rank={ mark.rank }
                          />
                        </Link>
                      </div>
                    </div>
                  )
                })
              }
              <button
                className='btn-success'
                onClick={(e) => logOut(e)}
              >
                Logout
              </button>
            </> :
            <>
              <EmptyResults />
              <button
                className='btn-success'
                onClick={(e) => logOut(e)}
              >
                Logout
              </button>
            </>
          }
        </div>
      </div>
    </>
  )
} 