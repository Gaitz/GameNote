import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import config from "./firebase.config"

class FirebaseService {
  constructor(config) {
    firebase.initializeApp(config)
    this.auth = firebase.auth()
    this.db = firebase.firestore()
  }
}

const firebaseService = new FirebaseService(config)

export default firebaseService
