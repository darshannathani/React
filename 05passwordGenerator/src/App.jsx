import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "0123456789"
    let sym = "!@#$%^&*()_+"

    if (numberAllowed) {
      str += num
    }
    if (characterAllowed) {
      str += sym
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])

  useEffect(() => {
    passwordGenrator()
  }, [length, numberAllowed, characterAllowed, passwordGenrator])
  
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])



  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-center text-white mb-3 '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type='text' 
          className='outline-none w-full py-1 px-3' 
          placeholder='password' 
          value={password} 
          // onChange={(e) => setLength(e.target.value)} 
          ref = {passwordRef}
          readOnly/>
        <button 
          className='outline-none bg-blue-600 hover:bg-blue-800 active:bg-blue-950 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}>
            Copy
          </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id = "numberInput"
            onChange={() => {setNumberAllowed((prev) => !prev);
            }} 
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={characterAllowed}
            id = "characterInput"
            onChange={() => {setCharacterAllowed((prev) => !prev); //callback fired here to conitnously change the value of the checkbox
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
