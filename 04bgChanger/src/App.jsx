import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 w-full inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-full'>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{backgroundColor: 'red'}} onClick={() => setColor('red')}>Red</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{backgroundColor: 'green'}} onClick={() => setColor('green')}>Green</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor: 'blue'}} onClick={() => setColor('blue')}>Blue</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{backgroundColor: 'Cyan'}} onClick={() => setColor('cyan')}>Cyan</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{backgroundColor: 'white'}} onClick={() => setColor('white')}>White</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor: 'black'}} onClick={() => setColor('black')}>Black</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white' style={{backgroundColor: 'purple'}} onClick={() => setColor('purple')}>Purple</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{backgroundColor: 'pink'}} onClick={() => setColor('pink')}>Pink</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{backgroundColor: 'olive'}} onClick={() => setColor('olive')}>Olive</button>
          <button className='outline-none px-4 rounded-full shadow-lg' style={{backgroundColor: 'orange'}} onClick={() => setColor('orange')}>Orange</button>
        </div>
      </div>
    </>
  )
}

export default App
