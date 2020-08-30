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
