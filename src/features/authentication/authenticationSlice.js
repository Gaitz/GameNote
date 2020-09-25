import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
}

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: {
      reducer: (state, action) => {
        const userInfo = { email: action.payload.email }
        state.user = userInfo
      },
      prepare: (user) => ({
        payload: {
          email: user.email,
        },
      }),
    },
    logout(state) {
      state.user = null
    },
  },
})

export const { login, logout } = authenticationSlice.actions
export default authenticationSlice.reducer
