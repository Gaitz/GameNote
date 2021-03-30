import { render } from "game-note/shared/utils/test-utils"
import { Login } from "./index"

jest.mock("./hooks", () => {
  return {
    __esModule: true,
    useFirebaseAuthLogin: jest.fn(() => ({
      isLoading: false,
      handleGitHubSignIn: jest.fn()
    }))
  }
})

jest.mock("./EmailLogin", () => {
  return {
    __esModule: true,
    default: function mockEmailLogin() {
      return <p>EmailLogin</p>
    }
  }
})

describe("Login component", () => {
  it("Snapshot", () => {
    const { asFragment } = render(<Login />)
    expect(asFragment()).toMatchSnapshot()
  })
})
