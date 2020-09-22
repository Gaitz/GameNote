import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./app/store"
import App from "./app/App"

/*
 * setup Redux
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
