import {
  auth, 
  googleProvider
} from '../../config/firebase.config'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { Marks } from '../ui/Marks';
import { Login } from '../ui/Login'

export function Bookmarks() {
  let title = 'Bookmarks'
  const [userObj, setUserObj] = useState({})
  const [errorObj, setErrorObj] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserObj({...user})
      } else {
        setUserObj({})
      }
    })
  }, [])

  const signIn = async (e) => {
    e.preventDefault()
    await signInWithPopup(auth, googleProvider)
      .then(result => {
        setUserObj({
          credential: GoogleAuthProvider.credentialFromResult(result),
          token: GoogleAuthProvider.credentialFromResult(result).credential,
          user: result.user
        })
      })
      .catch(error => {
        setErrorObj({
          code: error.errorCode,
          message: error.message,
          email: error.customData.email,
          credential: GoogleAuthProvider.credentialFromError(error)
        })
      })
  }

  const logOut = (e) => {
    e.preventDefault()
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <div className="bookmarks">
        <div className="bookmarks__content">
          <Breadcrumbs title={title} />
          {
            Object.keys(userObj).length > 0 ?
            <>
              <Marks 
                userObj={userObj}
                logOut={logOut}
              />
            </> :
            <>
              <Login
                signIn={signIn} 
              />
            </>
          }
        </div>
      </div>
    </>
  )
}