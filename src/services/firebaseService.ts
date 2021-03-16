import firebase from "firebase/app"
import firebaseConfig from "./firebase.config"
import "firebase/firestore"
import "firebase/auth"
import "firebase/analytics"

export function initializeClientSideFirebaseService(): void {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
}
