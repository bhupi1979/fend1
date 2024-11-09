import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Studentform } from './Studentform'
import { Carasoul } from './Carasoul'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-center  bg-success text-white m-0" >WELCOME TO Student information</h1>
      <Carasoul/>

  <Studentform/>
    </>
  )
}

export default App
