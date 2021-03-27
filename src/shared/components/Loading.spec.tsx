import { render } from "@testing-library/react"
import { Loading } from "./Loading"

describe("Hello jest", () => {
  test("Loading component", async () => {
    render(<Loading></Loading>)
    expect(1).toBe(1)
  })
})
