import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  
  const addValue = () => {
    setCounter(counter+1)
    
  }

  const subValue = () => {
    setCounter(counter-1)
  }
  return (
    <>
     <h1>Darshan Nathani!</h1>
     <h3>Counter Value: {counter}</h3>
     <button onClick={addValue}>Add value {counter}</button><br/><br/>
     <button onClick={subValue}>Subtract value {counter}</button>
    </>
  )
}

export default App
