import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "normalize.css"
import styles from "./App.style.css"

/*
 * React Root component
 *
 * add React Router
 */
export default function App() {
  const value = useSelector((state) => state.value)
  const dispatch = useDispatch()

  const ReduxSample = () => (
    <article className={styles.article}>
      <h1>Hello App</h1>
      <p>value is {value}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>add</button>
      <div>
        <Link to="/abc">abc</Link>
      </div>
    </article>
  )

  const NotMatches = () => <p>404</p>

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ReduxSample />
        </Route>
        <Route path="*">
          <NotMatches />
        </Route>
      </Switch>
    </Router>
  )
}
