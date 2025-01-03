import { useState } from 'react'
function App() {
  let [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter+1) //counter++
  }
  const decrement = () =>{
    setCounter(counter-1)
  }
  return (
    <>
    <h1>Counter value: {counter}</h1>
    <button onClick={decrement}>Decrement</button>
    <button onClick={increment}>Increment</button>
    </>
  )
}

export default App
