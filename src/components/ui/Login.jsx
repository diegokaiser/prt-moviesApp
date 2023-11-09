/* eslint-disable react/prop-types */

export function Login({
  signIn
}) {

  return (
    <>
      <div className="login">
        <p>
          Please, sign up and login.
        </p>
        <button
          className="btn-success"
          onClick={(e) => signIn(e)}
        >
          Sign in with Google
        </button>
      </div>
    </>
  )
}