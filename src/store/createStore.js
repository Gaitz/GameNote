function singletonCreateStore() {
  let store = null
  let state = null

  return function createStore(rootReducer, initialState = null) {
    if (typeof rootReducer !== "function") {
      throw new TypeError(
        "createStore first argument should be a reducer function"
      )
    }

    if (store) {
      console.debug("already create return singleton instance")
      return store
    }

    const reducerInitialState = rootReducer(undefined, { type: undefined })
    state = { ...initialState, ...reducerInitialState }

    store = {
      get state() {
        return state
      },
      dispatch: function (action) {
        state = rootReducer(state, action)
      },
    }

    Object.freeze(store)
    return store
  }
}

const createStore = singletonCreateStore()
export { createStore }
