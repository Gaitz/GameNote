import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firebaseService from "game-note/services/firebaseService"

const login = createAsyncThunk("authentication/login", async (loginData) => {
  if (loginData.email && loginData.password) {
    const userCredential = await firebaseService.auth.signInWithEmailAndPassword(
      loginData.email,
      loginData.password
    )
    return { email: userCredential.user.email }
  }
})

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    user: null,
    error: null,
    isPending: false,
  },
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.isPending = true
    },
    [login.fulfilled]: (state, action) => {
      state.user = { email: action.payload.email }
      state.isPending = false
    },
    [login.rejected]: (state, action) => {
      const { code, message } = action.error
      state.error = { code, message }
      state.isPending = false
    },
  },
})

export { login }
export default authenticationSlice.reducer
