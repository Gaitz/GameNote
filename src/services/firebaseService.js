import "firebase/firestore"
import "firebase/auth"
import "firebase/analytics"
import * as firebase from "firebase/app"
import config from "./firebase.config"

class FirebaseService {
    constructor (firebaseSDK, initialConfig) {
        firebaseSDK.initializeApp(initialConfig)
        firebaseSDK.analytics()
        this.auth = firebaseSDK.auth()
        this.db = firebaseSDK.firestore()
    }
}

export default new FirebaseService(
    firebase,
    config
)
