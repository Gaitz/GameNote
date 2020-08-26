import React, { useContext, useEffect } from "react"
import { useCreateStore, storeContext } from "@hooks"

export default function Login() {
  return <Parent></Parent>
}

const add = {
  type: "ADD",
  value: 2,
}

const actionTypes = {
  ADD: "ADD",
}

const reducerInitialState = {
  sum: 0,
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

const initialState = {
  initialString: "",
  initialNumber: 123,
  initialObject: { nested: "nestedObject" },
}

function Parent() {
  const Store = useCreateStore(sumReducer, initialState)
  return (
    <Store>
      <div>hello</div>
      <Child></Child>
    </Store>
  )
}

let callTimes = 0

function Child() {
  const store = useContext(storeContext)

  useEffect(() => {
    console.log(callTimes)
    callTimes++
  })

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        store.dispatch(add)
        return resolve()
      }, 0)
    })
  }, [])

  return <p>{console.log(store.state)}</p>
}
