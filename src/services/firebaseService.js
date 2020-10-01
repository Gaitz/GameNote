import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/analytics"
import config from "./firebase.config"

class FirebaseService {
  constructor(config) {
    firebase.initializeApp(config)
    this._initialServices()
    this.auth = firebase.auth()
    this.db = firebase.firestore()
  }

  _initialServices() {
    firebase.analytics()
  }
}

export default new FirebaseService(config)
