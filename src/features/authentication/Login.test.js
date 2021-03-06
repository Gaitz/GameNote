import React from "react"
import { Provider } from "react-redux"
import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import configureStore from "redux-mock-store"
import Login from "./Login"

const mockStore = configureStore()

test(
  "test password toggle visible",
  () => {
    const initialState = {
      authentication: {
        user: null,
        error: null,
        isPending: false
      }
    }
    const store = mockStore(initialState)
    const { container, getByTestId, getByLabelText } = render(<Provider store={store}>
      <Login />
    </Provider>)
    expect(container).toMatchSnapshot()

    const toggleVisibleButton = getByTestId("toggleVisible")
    expect(toggleVisibleButton).toBeTruthy()
    fireEvent.click(toggleVisibleButton)

    expect(getByLabelText("Password:")).toHaveAttribute(
      "type",
      "text"
    )
  }
)
