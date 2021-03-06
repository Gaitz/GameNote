import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "game-note/app/store"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export * from "./useRenderLog"
