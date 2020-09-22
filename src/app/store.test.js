import store from "./store"

describe("store test", () => {
  test("export default store is an object", () => {
    expect(typeof store).toBe("object")
  })
})
