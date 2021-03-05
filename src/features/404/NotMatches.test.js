import React from "react"
import { render } from "@testing-library/react"
import NotMatches from "./NotMatches"

test(
    "404 component snapshot testing",
    () => {
        const { container } = render(<NotMatches></NotMatches>)
        const tree = container.firstChild
        expect(tree).toMatchInlineSnapshot(`
    <article>
      <h1>
        404
      </h1>
    </article>
  `)
    }
)
