import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-red-500 text-black p-4 rounded-xl">
      Employees
    </h1>
    <Card name="Delba" description="This is a description"/>
    <Card name="John" description="This is a description" btn="Not Available"/>
    <Card name="Amily" description="This is a description"/>
    </>
  )
}

export default App
