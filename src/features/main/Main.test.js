import React from "react"
import { render } from "@testing-library/react"
import Main from "./Main"

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn().mockReturnValue({ email: "test@gmail.com" }),
}))

test("main component snapshot testing", () => {
  const component = render(<Main></Main>)
  let tree = component.container
  expect(tree).toMatchSnapshot()
})
