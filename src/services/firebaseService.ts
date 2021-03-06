import firebase from "firebase/app"
import firebaseConfig from "./firebase.config"
import "firebase/firestore"
import "firebase/auth"
import "firebase/analytics"

const APP_NAME = "game-note"

function getFirebaseService () {
  if (firebase.apps.length > 0) {
    return firebase.apps.find((app) => app.name === APP_NAME)
  }
  return firebase.initializeApp(firebaseConfig, APP_NAME)
}

export default getFirebaseService()
