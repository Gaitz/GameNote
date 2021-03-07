import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthenticationSlice {
  user: AppUser | null
}

export type AppUser = {
    displayName: string | null,
    email: string | null,
    photoURL: string | null
  } | null

const initialState: AuthenticationSlice = {
  user: null
}

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    authStateChange: (state, action: PayloadAction<AppUser>) => {
      if (!action.payload) {
        state.user = null
      } else {
        state.user = {
          displayName: action.payload?.displayName ?? null,
          email: action.payload?.email ?? null,
          photoURL: action.payload?.photoURL ?? null
        }
      }
    }
  }
})

export const { authStateChange } = authenticationSlice.actions

export default authenticationSlice.reducer
