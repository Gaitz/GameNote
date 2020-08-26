import React from "react"
import Login from "./index"
import { unmountComponentAtNode, render } from "react-dom"
import { act } from "react-dom/test-utils"

describe("using Hook state management", () => {
  let container = null

  beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  test("hello jest", (done) => {
    act(() => {
      render(<Login />, container)
      setTimeout(() => {
        done()
      }, 10)
    })
  })
})
