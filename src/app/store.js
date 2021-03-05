import { configureStore } from "@reduxjs/toolkit"
import authenticationReducer from "game-note/features/authentication/authenticationSlice"

const store = configureStore({
    reducer: { authentication: authenticationReducer }
})

export default store
