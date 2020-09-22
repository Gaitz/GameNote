import authenticationReducer from "./authentication"
import { combineReducers } from "./useCreateStore"

const rootReducer = combineReducers({ authenticationReducer })

export default rootReducer

export const initialState = {
  sayHi: "hello my hook version Redux",
}
