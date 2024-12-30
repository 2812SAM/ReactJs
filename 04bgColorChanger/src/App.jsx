import { useState } from 'react'


function App() {
  let [colour , setColour] = useState('White')
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: colour}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=>{setColour('Blue')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=>{setColour('Olive')}}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "olive"}}>olive</button>
          <button onClick={()=>{setColour('Yellow')}}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "yellow"}}>yellow</button>
          <button onClick={()=>{setColour('Grey')}}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "grey"}}>grey</button>         
          <button onClick={()=>{setColour('Red')}}className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Red"}}>Red</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
