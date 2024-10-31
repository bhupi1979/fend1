import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Studentform } from './Studentform'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-center p-5 bg-success text-white" >WELCOME TO Student information</h1>
  <Studentform/>
    </>
  )
}

export default App
