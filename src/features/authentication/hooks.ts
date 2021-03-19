import { useMemo, useCallback, useEffect, useState } from "react"
import { useAppDispatch } from "game-note/shared/store"
import firebase from "firebase/app"
import {
  logInFromFirebaseAuth,
  logOutFromFirebaseAuth
} from "game-note/features/authentication"
import { useToast } from "@chakra-ui/react"
import { useTranslation } from "next-i18next"

type UseFirebaseAuthLogin = () => {
  isLoading: boolean
  handleGitHubSignIn: () => void
}
type EMAIL_LOGIN_FORM = {
  EMAIL_FORM_ID: string
  EMAIL_INPUT_NAME: string
  PASSWORD_INPUT_NAME: string
}
type UseFirebaseAuthEmailLogin = ({
  EMAIL_FORM_ID,
  EMAIL_INPUT_NAME,
  PASSWORD_INPUT_NAME
}: EMAIL_LOGIN_FORM) => {
  handleEmailSignIn: () => void
  handleEmailSignUp: () => void
  isSubmitting: boolean
}
type UseFirebaseAuthLogout = () => { handleSignOut: () => void }
type UseToastErrorHandler = () => {
  errorHandlerWithToast: (error: firebase.FirebaseError) => void
}

export const useToastErrorHandler: UseToastErrorHandler = () => {
  const toast = useToast()
  const { t, i18n } = useTranslation("login")
  const currentLanguage = i18n.language

  return {
    errorHandlerWithToast: (error) => {
      toast({
        title: `${
          currentLanguage !== "en" ? t(error.code.concat(".title")) : error.code
        }`,
        description: `${
          currentLanguage !== "en"
            ? t(error.code.concat(".description"))
            : error.message
        }`,
        status: "error",
        isClosable: true
      })
    }
  }
}

export const useFirebaseAuthLogin: UseFirebaseAuthLogin = () => {
  const dispatch = useAppDispatch()
  const { errorHandlerWithToast } = useToastErrorHandler()

  const [isLoading, setIsLoading] = useState(true)

  const gitHubProvider = useMemo(() => new firebase.auth.GithubAuthProvider(), [
    firebase
  ])

  const handleGitHubSignIn = useCallback(() => {
    firebase.auth().signInWithRedirect(gitHubProvider)
  }, [gitHubProvider])

  useEffect(() => {
    firebase
      .auth()
      .getRedirectResult()
      .then((result) => {
        const { user } = result
        if (user) {
          dispatch(logInFromFirebaseAuth(user))
        }
        setIsLoading(false)
      })
      .catch(errorHandlerWithToast)
  }, [])

  return {
    isLoading,
    handleGitHubSignIn
  }
}

export const useFirebaseAuthEmailLogin: UseFirebaseAuthEmailLogin = ({
  EMAIL_FORM_ID,
  EMAIL_INPUT_NAME,
  PASSWORD_INPUT_NAME
}) => {
  const dispatch = useAppDispatch()
  const { errorHandlerWithToast } = useToastErrorHandler()

  const [isSubmitting, setSubmitting] = useState(false)

  type SubmitType = "SignUp" | "SignIn"
  type GetFirebaseEmailLoginHandler = (submitType: SubmitType) => () => void

  const getFirebaseEmailLoginHandler: GetFirebaseEmailLoginHandler = (
    submitType
  ) => () => {
    setSubmitting(true)

    const loginForm = document?.getElementById(EMAIL_FORM_ID) as HTMLFormElement
    const isValidForm = loginForm?.checkValidity() ?? true

    if (isValidForm) {
      const email =
        (loginForm.elements.namedItem(EMAIL_INPUT_NAME) as RadioNodeList)
          ?.value ?? ""
      const password =
        (loginForm.elements.namedItem(PASSWORD_INPUT_NAME) as RadioNodeList)
          ?.value ?? ""

      const firebaseActionReturn =
        submitType === "SignIn"
          ? firebase.auth().signInWithEmailAndPassword(email, password)
          : firebase.auth().createUserWithEmailAndPassword(email, password)

      firebaseActionReturn
        .then((userCredential) => {
          const { user } = userCredential
          if (user) {
            dispatch(logInFromFirebaseAuth(user))
          }
        })
        .catch(errorHandlerWithToast)
        .finally(() => {
          setSubmitting(false)
        })
    } else {
      setSubmitting(false)
    }
  }

  const handleEmailSignUp = getFirebaseEmailLoginHandler("SignUp")
  const handleEmailSignIn = getFirebaseEmailLoginHandler("SignIn")

  return {
    handleEmailSignIn,
    handleEmailSignUp,
    isSubmitting
  }
}

export const useFirebaseAuthLogout: UseFirebaseAuthLogout = () => {
  const dispatch = useAppDispatch()

  const handleSignOut = useCallback(() => {
    dispatch(logOutFromFirebaseAuth())
  }, [dispatch])

  return { handleSignOut }
}
