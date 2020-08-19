import config from "./firebase.config"
import firebase from "firebase/app"
import "firebase/firestore"

firebase.initializeApp(config)

export default {
  db: firebase.firestore(),
}
