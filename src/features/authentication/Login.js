/* eslint-disable */
import React from "react"
import styles from "./Login.style.css"
import { useDispatch, useSelector } from "react-redux"
import { login } from "./authenticationSlice"
import EyeIcon from "game-note/shared/images/Simple-Eye-Line-Art.svg"

export default function Login () {
    const [
        formState,
        setFormState
    ] = React.useState({
        isPasswordVisible: false
    })

    const [
        loginData,
        setLoginData
    ] = React.useState({
        email: null,
        password: null
    })

    const loginError = useSelector((state) => state.authentication.error)
    const isPending = useSelector((state) => state.authentication.isPending)
    const dispatch = useDispatch()

    return (
        <>
            <h1>Game Note</h1>
            <article className={styles.loginComponent}>
                <form
                    onSubmit={(event) => {
                        event.preventDefault()
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
                            disabled={isPending}
                            autoComplete="username"
                            onChange={(event) => setLoginData({ ...loginData,
                                email: event.target.value })
                            }
                        ></input>
                    </div>
                    <div className={styles.inputBlock}>
                        <label htmlFor="password">Password:</label>
                        <div className={styles.passwordInputBlock}>
                            <input
                                id="password"
                                name="password"
                                type={formState.isPasswordVisible
                                    ? "text"
                                    : "password"}
                                required
                                disabled={isPending}
                                autoComplete="current-password"
                                onChange={(event) => setLoginData({ ...loginData,
                                    password: event.target.value })
                                }
                            ></input>
                            <img
                                data-testid="toggleVisible"
                                src={EyeIcon}
                                alt="Click to toggle password visible"
                                className={styles.toggleVisibleButton}
                                onClick={(event) => {
                                    event.preventDefault()
                                    setFormState({
                                        ...formState,
                                        isPasswordVisible: !formState.isPasswordVisible
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <button
                        className={styles.loginButton}
                        type="submit"
                        disabled={isPending}
                    >
            Login
                    </button>
                    {loginError
                        ? <p className={styles.errorMessageBlock}>{loginError.message}</p>
                        : null}
                </form>
            </article>
        </>
    )
}
