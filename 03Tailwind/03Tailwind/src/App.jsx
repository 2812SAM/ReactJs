import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"Regret",
    age:21
  }
  let myObj2={
    name:"Sucess",
    age:24
  }
  let Array= [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      <Card username = "Swayam" obj={myObj}/>
      <Card username = "no-one" obj={myObj2}/>
    </>
  )
}

export default App
