import { useState , useCallback, useEffect , useRef} from 'react'

function App() {
  const [length, setLength]=useState(8)
  const [num, setNum]=useState(false)
  const [char, setChar]=useState(false)
  const [password, setPassword]=useState("")
  const passwordGen = useCallback(()=>{
    let str='QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
    if(num) str+='1234567890'
    if(char) str+='!@#$%^&*()`~[]{}'
    let pass=""
    for (let index = 1; index <= length; index++) {
      let ind=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(ind)
    }
    setPassword(pass)
  },[length, num, char])

  useEffect(()=>{
    passwordGen()
  },[length , num, char, passwordGen])

  const passwordRef=useRef(null)
  const copyPass= ()=>{
    window.navigator.clipboard.writeText(password)
  }
  return (
    <>
    
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-grey-500 text-orange-500">
        <h1 className='text-white text-center'>PasswordGenerator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password} 
            className='outline-none w-full py-1 px-3' 
            placeholder='password' 
            readOnly 
          />
          <button onClick={copyPass} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={num}
                id="numberInput"
                onChange={() => {
                    setNum((prev) => !prev);
                }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                  setChar((prev) => !prev )
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
