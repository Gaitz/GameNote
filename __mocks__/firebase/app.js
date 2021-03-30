let isAuthSuccess = null
let testMode = ""

function _setAuthSuccess(isSuccess = true) {
  isAuthSuccess = isSuccess
}

function _setTestMode(text = "") {
  testMode = text
}

function authHandler() {
  if (isAuthSuccess)
    return () =>
      Promise.resolve({
        user: {
          getIdToken: () => Promise.resolve("test_id_token"),
          displayName: `test_${testMode}_displayName`,
          email: `test_${testMode}_email`,
          photoURL: `test_${testMode}_photoURL`
        }
      })
  else
    return () =>
      Promise.reject({
        code: `test_${testMode}_errorCode`,
        message: `test_${testMode}_errorMessage`
      })
}

export default {
  _setAuthSuccess,
  _setTestMode,
  analytics: () => null,
  initializeApp: () => null,
  auth: () => ({
    signOut: () => Promise.resolve(true),
    createUserWithEmailAndPassword: authHandler(),
    signInWithEmailAndPassword: authHandler()
  }),
  firestore: () => null
}
