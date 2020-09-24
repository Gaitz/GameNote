import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "normalize.css"
import "game-note/shared/shared.style.css"
import Main from "game-note/features/main/Main"
import NotMatches from "game-note/features/404/NotMatches"

/*
 * React Root component
 *
 * add React Router
 */
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="*">
          <NotMatches />
        </Route>
      </Switch>
    </Router>
  )
}
