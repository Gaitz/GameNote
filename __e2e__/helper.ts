import { ClientFunction } from "testcafe"

export const reload = ClientFunction(() => {
  location.reload()
})
