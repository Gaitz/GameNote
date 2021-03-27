import { render } from "@testing-library/react"
import Loading from "./Loading"

describe("Loading component", () => {
  test("Snapshot", async () => {
    const { asFragment } = render(<Loading></Loading>)
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="css-1rjqoje"
        >
          <div
            class="chakra-spinner css-18ulzc"
          >
            <span
              class="css-f8n5zr"
            >
              Loading...
            </span>
          </div>
        </div>
      </DocumentFragment>
    `)
  })
})
