
import { useMemo, useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "game-note/shared/store";
import firebase from "firebase/app"
import { logInFromFirebaseAuth, logOutFromFirebaseAuth } from "game-note/features/authentication"

type UseFirebaseAuthLogin = () => { isLoading: boolean, handleGitHubSignIn: () => void }
type UseFirebaseAuthLogout = () => { handleSignOut: () => void }

export const useFirebaseAuthLogin: UseFirebaseAuthLogin = () => {
  const dispatch = useAppDispatch()

  const [
    isLoading,
    setIsLoading
  ] = useState(true)

  const gitHubProvider = useMemo(() => new firebase.auth.GithubAuthProvider(), [firebase])

  const handleGitHubSignIn = useCallback(() => {
    firebase.auth().signInWithRedirect(gitHubProvider)
  }, [gitHubProvider])

  useEffect(() => {
    firebase.
      auth().
      getRedirectResult().
      then((result) => {
        const { user } = result
        if (user) {
          dispatch(logInFromFirebaseAuth(user))
        }
        setIsLoading(false)
      }).
      catch(() => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const { email } = error;
        // // The firebase.auth.AuthCredential type that was used.
        // const { credential } = error;
        // nookies.set(null, AUTH_COOKIE_KEY, "")
      });
  }, [])

  return {
    isLoading,
    handleGitHubSignIn
  }
}

export const useFirebaseAuthLogout: UseFirebaseAuthLogout = () => {
  const dispatch = useAppDispatch()

  const handleSignOut = useCallback(() => {
    dispatch(logOutFromFirebaseAuth())
  }, [dispatch])

  return { handleSignOut }
}
