import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import firebase from "firebase/app"

interface AuthenticationSlice {
  user: firebase.User | null
}

const initialState: AuthenticationSlice = {
  user: null
}

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    authStateChange: (state, action: PayloadAction<firebase.User | null>) => {
      state.user = action.payload
    }
  }
})

export const { authStateChange } = authenticationSlice.actions

export default authenticationSlice.reducer
