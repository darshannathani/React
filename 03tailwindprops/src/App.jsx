import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-lg'>Tailwind CSS</h1>
    <Card btnText="click me"/>
    <Card btnText="visit me"/>

    </>
  )
}

export default App
