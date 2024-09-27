import React, { useRef, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const val = useRef(0);

  const btnRefCoral = useRef(null);
  const btnRefLightBlue = useRef(null);

  const handleIncrement = (e) => {
    val.current = val.current + 1
    setCount(prevCount => prevCount + 1)
  }


  const handleDecrement = (e) => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
      val.current = val.current - 1
    }
  }

  const handleColor = () => {
    btnRefCoral.current.style.backgroundColor = "coral"
    btnRefLightBlue.current.style.backgroundColor = "crimson"
  }

  return (
    <>
      <button onClick={handleIncrement} disabled={count === 12} ref={btnRefCoral}>Increment</button>
      <button onClick={handleDecrement} disabled={count === 0} ref={btnRefLightBlue}>Decrement</button >
      <h1>Count : {count}</h1>
      <h1>Val : {val.current}</h1>

      <button onClick={handleColor}>Color change</button>
    </>
  )
}

export default App