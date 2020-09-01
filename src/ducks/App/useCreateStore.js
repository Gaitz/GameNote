import React, { useReducer } from "react"

export const storeContext = React.createContext()

export function useCreateStore(rootReducer, initialState = {}) {
  const initial = {
    ...rootReducer(undefined, { type: undefined }),
    ...initialState,
  }

  const [state, dispatch] = useReducer(rootReducer, initial)

  const store = {
    /* state is read only */
    get state() {
      return state
    },
    dispatch: dispatch,
  }

  const Store = ({ children }) => {
    return (
      <storeContext.Provider value={store}>{children}</storeContext.Provider>
    )
  }

  return Store
}

export function combineReducers(reducers) {
  const combinedInitialState = Object.values(reducers).reduce(
    (combinedInitialState, aReducer) => {
      const reducerInitialState = {
        ...aReducer(undefined, { type: undefined }),
      }
      return { ...combinedInitialState, ...reducerInitialState }
    },
    {}
  )

  return function rootReducer(
    state = combinedInitialState,
    action = { type: undefined }
  ) {
    const reducersKey = Object.keys(reducers)
    const sizeOfReducers = Object.entries(reducers).length

    for (let i = 0; i < sizeOfReducers; i++) {
      const key = reducersKey[i]
      const reducer = reducers[key]
      const newState = reducer(state, action)
      const hasChanged = state !== newState
      if (hasChanged) {
        return newState
      }
    }

    return state
  }
}
