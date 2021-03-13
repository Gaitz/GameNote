import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import firebase from "firebase/app"
import nookies from "nookies"
import { AppThunk } from "game-note/shared/store"

export const AUTH_COOKIE_KEY = "game-note_token"
const SLICE_NAME = "authentication"

interface AuthenticationState {
  user: AppUser
}

export type AppUser = {
    displayName?: string | null,
    email?: string | null,
    photoURL?: string | null
  } | null

const initialState: AuthenticationState = {
  user: null
}

export const authentication = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    init: () => initialState,
    signIn: (state, action: PayloadAction<AppUser>) => {
      if (action.payload) {
        state.user = action.payload
      }
    },
    signOut: (state) => {
      state.user = null
    }
  }
})

export const logInFromFirebaseAuth = (user: firebase.User): AppThunk => async (dispatch) => {
  if (user) {
    const firebaseToken = await user.getIdToken()
    nookies.set(null, AUTH_COOKIE_KEY, firebaseToken)
    const { displayName, email, photoURL } = user

    dispatch(signIn({
      displayName,
      email,
      photoURL
    }))
  }
}

export const logOutFromFirebaseAuth = (): AppThunk => async (dispatch) => {
  await firebase.auth().signOut()
  nookies.set(null, AUTH_COOKIE_KEY, "")
  dispatch(signOut())
}

export const { signIn, signOut, init } = authentication.actions

export default authentication.reducer

