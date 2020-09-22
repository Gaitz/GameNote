import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: function rootReducer(state = { value: 0 }, action) {
    switch (action.type) {
      case "ADD":
        return { ...state, value: state.value + 1 }
      default:
        return state
    }
  },
})

export default store
