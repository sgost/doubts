import React, { Fragment, useState, useCallback } from "react"

const IndexPage = () => {

  //useRef
  const refCont = React.useRef("");

  console.log(refCont.current.value)
  ///////////////////////////////////////////////////////////
  const [count, setCount] = useState(0);
  //useCallback
  useCallback(() => {
    alert('useCallback')
    fun();
  }, [count])

  const fun = () => {
    alert('fun')
  }

  const ob = { a: 1, b: 2 };
  return (
    <Fragment>
      <input type="text" ref={refCont} />
      <button onClick={() => setCount(count + 1)}>click</button>
    </Fragment>
  )
}

export default IndexPage;