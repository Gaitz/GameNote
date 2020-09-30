import React from "react"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"
import configureStore from "redux-mock-store"
import Main from "./Main"

const mockStore = configureStore()

test.only("main component snapshot testing", () => {
  const store = mockStore({
    authentication: { user: { email: "test@gmail.com" } },
  })

  const component = render(
    <Provider store={store}>
      <Main />
    </Provider>
  )
  let tree = component.container
  expect(tree).toMatchSnapshot()
})
