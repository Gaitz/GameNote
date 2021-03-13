import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { configureStore, Reducer, combineReducers, Action, ThunkAction } from "@reduxjs/toolkit"
import { MakeStore, createWrapper, HYDRATE } from "next-redux-wrapper"
import authentication from "game-note/features/authentication/authenticationSlice"

const combinedReducer = combineReducers({
  authentication
})

const reducer: Reducer<ReturnType<typeof combinedReducer>> = (state, action) => {
  switch (action.type) {
  case HYDRATE:
    return { ...state,
      ...action.payload }
  default:
    return combinedReducer(state, action)
  }
}

const store = configureStore({
  reducer
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const makeStore: MakeStore<RootState> = () => store

export const wrapper = createWrapper<RootState>(makeStore)

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
