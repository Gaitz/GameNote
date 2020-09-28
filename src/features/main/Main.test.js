import React from "react"
import renderer from "react-test-renderer"
import Main from "./Main"

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn().mockReturnValue({ email: "test@gmail.com" }),
}))

test("main component snapshot testing", () => {
  const component = renderer.create(<Main></Main>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
