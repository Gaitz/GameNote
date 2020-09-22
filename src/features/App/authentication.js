const SIGN_IN = "game-note/authentication/SIGN_IN"
const SIGN_OUT = "game-note/authentication/SIGN_OUT"

const initialAuthentication = {
  isSignIn: false,
  user: null,
}

export default function reducer(
  state = initialAuthentication,
  action = { type: undefined }
) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignIn: true, user: action.user }
    case SIGN_OUT:
      return { ...state, isSignIn: false, user: null }
    default:
      return state
  }
}

export function userSignIn(user) {
  return { type: SIGN_IN, user: user }
}

export function userSignOut() {
  return { type: SIGN_OUT }
}
