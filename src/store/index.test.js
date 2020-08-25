import { createStore } from "./index.js"

describe("test createStore function", () => {
  let store

  const initialState = {
    initialString: "",
    initialNumber: 123,
    initialObject: { nested: "nestedObject" },
  }

  const reducerInitialState = {
    sum: 0,
  }

  const add = {
    type: "ADD",
    value: 2,
  }

  const actionTypes = {
    ADD: "ADD",
  }

  const sumReducer = (old_state = reducerInitialState, action) => {
    const { type } = action
    switch (type) {
      case actionTypes.ADD:
        return { ...old_state, sum: old_state.sum + action.value }
      default:
        return old_state
    }
  }

  beforeAll(() => {
    store = createStore(sumReducer, initialState)
  })

  afterAll(() => {
    store = null
  })

  test("example reducer", () => {
    const newState = sumReducer({ sum: 0 }, add)
    expect(newState.sum).toBe(2)
  })

  test("createStore is a function", () => {
    expect(typeof createStore).toBe("function")
  })

  test("createStore() throws an error when parameter is not a function", () => {
    expect(createStore).toThrow(TypeError)
  })

  test("store is an object", () => {
    expect(typeof store).toBe("object")
  })

  test("store is freeze object", () => {
    expect(Object.isFrozen(store)).toBe(true)
  })

  test("store is one and only one in an application", () => {
    const store2 = createStore(() => {})
    expect(store2).toBe(store)
  })

  test("Initialize state with creatStore initialState", () => {
    expect(store.state.initialString).toBe("")
    expect(store.state.initialNumber).toBe(123)
    expect(store.state.initialObject.nested).toBe("nestedObject")
  })

  test("state initial by reducer initial value", () => {
    expect(store.state.sum).toBe(0)
  })

  test("state is read only", () => {
    function testSetState() {
      store.state = "test setting"
    }
    expect(testSetState).toThrow(TypeError)
  })

  test("dispatch is a function", () => {
    expect(typeof store.dispatch).toBe("function")
  })

  test("dispatch action and get new state", () => {
    store.dispatch(add)
    expect(store.state.sum).toBe(2)
  })
})
