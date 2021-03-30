import EmailLogin from "./EmailLogin"
import { render, userEvent, waitFor } from "game-note/shared/utils/test-utils"
import { cleanup } from "@testing-library/react"
import store from "game-note/shared/store"
import firebase from "firebase/app"
import { init } from "./authenticationSlice"

describe("EmailLogin component", () => {
  beforeEach(() => {
    store.dispatch(init())
    // @ts-ignore
    firebase._setAuthSuccess()
  })

  afterEach(() => {
    cleanup()
  })

  it("Snapshot", () => {
    const { asFragment } = render(<EmailLogin />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("Toggle Password Visibility", () => {
    const { getByText, getByTestId } = render(<EmailLogin />)
    const toggleButton = getByText("show")
    const passwordInput = getByTestId("passwordInput")

    expect(passwordInput).toHaveAttribute("type", "password")
    userEvent.click(toggleButton)
    expect(passwordInput).toHaveAttribute("type", "text")
  })

  it("Sign Up", async () => {
    // @ts-ignore
    firebase._setTestMode("signUp")

    const { getByTestId, findByText } = render(<EmailLogin />)
    const emailInput = getByTestId("emailInput")
    const passwordInput = getByTestId("passwordInput")
    const signUp = getByTestId("signUp")

    userEvent.type(emailInput, "test@test.test")
    userEvent.type(passwordInput, "test_password")
    await waitFor(() => userEvent.click(signUp))

    expect(store.getState()["authentication"]).toMatchInlineSnapshot(`
      Object {
        "user": Object {
          "displayName": "test_signUp_displayName",
          "email": "test_signUp_email",
          "photoURL": "test_signUp_photoURL",
        },
      }
    `)

    // @ts-ignore
    firebase._setAuthSuccess(false)

    await waitFor(() => userEvent.click(signUp))

    const errorToast = await findByText("test_signUp_errorCode")
    expect(errorToast).toBeInTheDocument()
  })

  it("Sign In", async () => {
    // @ts-ignore
    firebase._setTestMode("signIn")

    const { getByTestId, findByText } = render(<EmailLogin />)
    const emailInput = getByTestId("emailInput")
    const passwordInput = getByTestId("passwordInput")
    const signIn = getByTestId("signIn")

    userEvent.type(emailInput, "test@test.test")
    userEvent.type(passwordInput, "test_password")
    await waitFor(() => userEvent.click(signIn))

    expect(store.getState()["authentication"]).toMatchInlineSnapshot(`
      Object {
        "user": Object {
          "displayName": "test_signIn_displayName",
          "email": "test_signIn_email",
          "photoURL": "test_signIn_photoURL",
        },
      }
    `)

    // @ts-ignore
    firebase._setAuthSuccess(false)

    await waitFor(() => userEvent.click(signIn))

    const errorToast = await findByText("test_signIn_errorCode")
    expect(errorToast).toBeInTheDocument()
  })
})
