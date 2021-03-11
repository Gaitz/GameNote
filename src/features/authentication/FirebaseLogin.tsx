import { useEffect } from "react";
import firebase from "firebase/app"
import * as firebaseui from "firebaseui"
import "firebaseui/dist/firebaseui.css"
import initializeClientSideFirebaseService from "game-note/services/firebaseService"

const ui = new firebaseui.auth.AuthUI(firebase.auth())

export default function FirebaseLogin () {
  const FIREBASEUI_LOGIN_ELEMENT = "firebaseUILoginElement"

  useEffect(() => {
    initializeClientSideFirebaseService()

    ui.start(`#${FIREBASEUI_LOGIN_ELEMENT}`, {
      //      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    })
  }, [])

  return <div id={FIREBASEUI_LOGIN_ELEMENT}></div>
}
