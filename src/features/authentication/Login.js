import React from "react"
import styles from "./Login.style.css"
import { useDispatch } from "react-redux"
import { login } from "./authenticationSlice"

export default function Login() {
  const [formState, setFormState] = React.useState({
    isPasswordVisible: false,
    errorMessage: null,
  })

  const [loginData, setLoginData] = React.useState({
    email: null,
    password: null,
  })

  const dispatch = useDispatch()

  return (
    <>
      <h1>Welcome Game Note</h1>
      <article className={styles.loginComponent}>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            if (formState.errorMessage) {
              event.target.reset()
              return
            }
            dispatch(login(loginData))
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
              disabled={formState.errorMessage ? true : false}
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
              disabled={formState.errorMessage ? true : false}
              autoComplete="current-password"
              onChange={(event) =>
                setLoginData({ ...loginData, password: event.target.value })
              }
            ></input>
          </div>
          <button className={styles.loginButton} type="submit">
            Login
          </button>
          {formState.errorMessage ? (
            <p className={styles.errorMessageBlock}>{formState.errorMessage}</p>
          ) : null}
        </form>
      </article>
    </>
  )
}
