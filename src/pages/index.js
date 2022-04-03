import React, { Fragment, useState, useEffect, useReducer } from "react"

const initialState = { count: 0 };


function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const IndexPage = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>click</button>
      <button onClick={() => dispatch({ type: 'increment' })}>click</button>
    </>
  )
}

export default IndexPage;