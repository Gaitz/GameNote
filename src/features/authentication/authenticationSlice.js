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
  },
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      console.log(action)
      state.user = { email: action.payload.email }
    },
  },
})

export { login }
export default authenticationSlice.reducer
