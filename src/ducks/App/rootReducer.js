export default function rootReducer(state = {}, action = { type: undefined }) {
  switch (action.type) {
    default:
      return state
  }
}

export const initialState = {
  sayHi: "hello my hook version Redux",
}
