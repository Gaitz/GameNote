import { render } from "@testing-library/react"
import store from "game-note/shared/store"
import theme from "game-note/shared/styles/theme"

// const AllTheProviders = ({ children }) => {
//   return (
//     <ReduxProvider store={store}>
//       <ChakraProvider theme={theme}>{children}</ChakraProvider>
//     </ReduxProvider>
//   )
// }

// const customRender = (ui: ReactElement, options?: object) =>
//   render(ui, { wrapper: AllTheProviders, ...options })

// // re-export everything
// export * from "@testing-library/react"

// // override render method
// export { customRender as render }
