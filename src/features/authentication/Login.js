import React from "react"
import styles from "./Login.style.css"
import firebaseService from "game-note/services/firebaseService"

export default function Login() {
  const [formState, setFormState] = React.useState({
    isPasswordVisible: false,
    errorMessage: null,
  })

  const [loginData, setLoginData] = React.useState({
    email: null,
    password: null,
  })

  return (
    <article className={styles.loginComponent}>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          if (formState.errorMessage) {
            event.target.reset()
            return
          }
          if (loginData.email && loginData.password) {
            firebaseService.auth
              .signInWithEmailAndPassword(loginData.email, loginData.password)
              .catch((error) => {
                console.error(error)
                setFormState({ ...formState, errorMessage: error.message })
              })
          }
        }}
        onReset={() => {
          setFormState({ ...formState, errorMessage: null })
        }}
      >
        <div className={styles.inputBlock}>
          <label htmlFor="email">Email:</label>
          <input
            autoFocus
            id="email"
            name="email"
            type="email"
            required
            autoComplete="username"
            onChange={(event) =>
              setLoginData({ ...loginData, email: event.target.value })
            }
          ></input>
        </div>
        <div className={styles.inputBlock}>
          <div className={styles.passwordLabelBlock}>
            <label htmlFor="password">Password:</label>
            <span
              className={styles.toggleVisibleButton}
              onClick={(event) => {
                event.preventDefault()
                setFormState({
                  ...formState,
                  isPasswordVisible: !formState.isPasswordVisible,
                })
              }}
            >
              toggle visible
            </span>
          </div>
          <input
            id="password"
            name="password"
            type={formState.isPasswordVisible ? "text" : "password"}
            required
            autoComplete="current-password"
            onChange={(event) =>
              setLoginData({ ...loginData, password: event.target.value })
            }
          ></input>
        </div>
        <button type="submit">Login</button>
        {formState.errorMessage ? (
          <button type="reset" className={styles.errorMessageBlock}>
            {formState.errorMessage}
          </button>
        ) : null}
      </form>
    </article>
  )
}
