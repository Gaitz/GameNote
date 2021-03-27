import { render } from "@testing-library/react"
import { Loading } from "game-note/shared/components"

describe("Loading component", () => {
  test("Snapshot Test", async () => {
    const { container } = render(<Loading></Loading>)
    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<div class=\\"css-1rjqoje\\"><div class=\\"chakra-spinner css-18ulzc\\"><span class=\\"css-f8n5zr\\">Loading...</span></div></div>"`
    )
  })
})
