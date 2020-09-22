import { combineReducers } from "./useCreateStore"

describe("implement combineReducers(reducers)", () => {
  let reducerA, reducerB, combinedReducer
  const ACTION_A = "action_A"
  const ACTION_B = "action_B"

  beforeAll(() => {
    reducerA = (state = { ra: "initial ra" }, action = {}) => {
      switch (action.type) {
        case ACTION_A:
          return { ...state, ra: "changed by Action_A" }
        default:
          return state
      }
    }

    reducerB = (state = { rb: "initial rb" }, action = {}) => {
      switch (action.type) {
        case ACTION_B:
          return { ...state, rb: "changed by Action_B" }
        default:
          return state
      }
    }

    combinedReducer = combineReducers({
      reducerA: reducerA,
      reducerB: reducerB,
    })
  })

  test("combineReducers is a function", () => {
    expect(typeof combineReducers).toBe("function")
  })

  test("combine reducers initial states", () => {
    expect(combinedReducer()).toEqual({
      ra: "initial ra",
      rb: "initial rb",
    })
  })

  test("passing action to combinedReducer", () => {
    const passedActionAState = combinedReducer(undefined, { type: ACTION_A })
    expect(passedActionAState).toEqual({
      ra: "changed by Action_A",
      rb: "initial rb",
    })
    const passedActionBState = combinedReducer(undefined, { type: ACTION_B })
    expect(passedActionBState).toEqual({
      ra: "initial ra",
      rb: "changed by Action_B",
    })
  })
})
