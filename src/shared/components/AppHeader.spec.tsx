import { fireEvent, render } from "game-note/shared/utils/test-utils"
import store from "game-note/shared/store"
import AppHeader from "./AppHeader"
import { signIn } from "game-note/features/authentication"

describe("AppHeader component", () => {
  it("Snapshot", () => {
    const { asFragment } = render(<AppHeader />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("Sign out", async () => {
    const dispatch = store.dispatch

    const testDisplayName = "test user name"
    const testEmail = "test@test.test"
    const testPhotoUrl = "https://avatars.githubusercontent.com/u/5541565?v=4"

    const { getByTestId, findByTestId, asFragment } = render(<AppHeader />)

    dispatch(
      signIn({
        displayName: testDisplayName,
        email: testEmail,
        photoURL: testPhotoUrl
      })
    )

    const menuButton = getByTestId("appHeaderMenuButton")
    expect(menuButton).toBeEnabled()

    fireEvent.click(menuButton)
    let userEmail = getByTestId("userEmail")
    expect(userEmail).toHaveTextContent(testEmail)

    const signOutButton = getByTestId("signOutButton")
    fireEvent.click(signOutButton)
    userEmail = await findByTestId("userEmail")

    expect(asFragment()).toMatchSnapshot()
    expect(store.getState()).toMatchInlineSnapshot(`
      Object {
        "authentication": Object {
          "user": null,
        },
      }
    `)
  })
})
