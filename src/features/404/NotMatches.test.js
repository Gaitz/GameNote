import React from "react"
import renderer from "react-test-renderer"
import NotMatches from "./NotMatches"

test("404 component snapshot testing", () => {
  const component = renderer.create(<NotMatches></NotMatches>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
