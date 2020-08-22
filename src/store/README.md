```javascript

// store is read only and only one store in an application
const store = {
getState: () => {}, // state should be immutable
dispatch: (action) => {}, // store.dispatch() trigger action, action = { type, payload }
subscribe: (listener) => {}, // implement through context API: Consumer or useContext Hook
}

const creatStore = (rootReducer [,initialState]) => {}

// a pure function,
function reducer(current_state, action) {
return new_state
}

// combine reducer functions into one root reducer function
const rootReducer = combineReducers(reducersFunctionObject)

const state = {}
const actions = {
LOGIN: "LOG_IN",
LOGOUT: "LOG_OUT",
SIGH_UP: "SING_UP",
}

const reducer = (state, action) => {
switch (action.type) {
case actions.LOGIN:
return { ...state, isLogin: true }
case actions.LOGOUT:
return { ...state, isLogin: false }
case actions.SIGH_UP:
return { ...state, isLogin: true }
default:
return state
}
}

// make state provider as global context to whole application
function StateProvider({ children }) {
// Consumer will register == Redux store.subscribe
const { Provider, Consumer } = React.createContext()

return <Provider value>{children}</Provider>
}

const [state, dispatch] = React.useReducer(rootReducer, initialState)

Redux file folders / ducks module pattern

View -(Store.dispatch(action))->
Reducer
Store -> reducer(state, action) ->
State -(View.update)->
View

View
Reducer
Action
Store
State

(react-redux) => {
<Provider />
connect()
}

// async action
(redux-thunk)
(redux-promise)
自行利用 thunk 模式, 實現非同步, 配合 async / await keyword 抽象化

subscription / publishing pattern
```
