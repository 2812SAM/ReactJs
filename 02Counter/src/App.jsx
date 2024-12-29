import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , Value] = useState(15)
  const Add = ()=>{
    console.log("Value Clicked",counter)
    if(counter<20)counter +=1
    Value(counter)
  }
  const Sub = ()=>{
    if(counter>0){
      counter -=1
    }
    Value(counter)
  }
  return (
    <>
      <h1>Counter Program</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={Add}>Add Value</button>
      <br/>
      <button onClick={Sub}>Clear Value</button>
    </>
  )
}

export default App
