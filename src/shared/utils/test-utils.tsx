import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { Provider as ReduxProvider } from "react-redux"
import { ChakraProvider } from "@chakra-ui/react"
import store from "game-note/shared/store"
import theme from "game-note/shared/styles/theme"
import React, { FC } from "react"
import type { ReactElement } from "react"
import type { RenderOptions } from "@testing-library/react"

/* eslint-disable react/prop-types */
const AllTheProviders: FC = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ReduxProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { default as userEvent } from "@testing-library/user-event"

export { customRender as render }
