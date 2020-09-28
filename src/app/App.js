import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import "normalize.css"
import "game-note/shared/shared.style.css"
import Main from "game-note/features/main/Main"
import NotMatches from "game-note/features/404/NotMatches"
import Login from "game-note/features/authentication/Login"
import { useSelector } from "react-redux"

/*
 * React Root component
 */
export default function App() {
  const isLogin = useSelector((state) => state.authentication.user)

  return (
    <Router>
      {isLogin ? <Redirect to="/gamenote" /> : <Redirect to="/login" />}

      <Switch>
        <Route exact path="/gamenote">
          <Main />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotMatches />
        </Route>
      </Switch>
    </Router>
  )
}
