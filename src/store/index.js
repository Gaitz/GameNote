// const createStore = function (rootReducer, initialState = null) {
//   if (typeof rootReducer === "function") {
//     console.log("get reducer")
//   } else {
//     console.log("createStore first argument should be a reducer function")
//   }

//   const state = { ...initialState }
//   Object.freeze(state)

//   const store = {
//     get state() {
//       return state
//     },
//     dispatch: function (action) {
//       ;`trigger action;`
//     },
//     subscribe: function (listner) {},
//   }

//   Object.freeze(store)

//   return (function () {
//     return store
//   })()
// }

// export default createStore
