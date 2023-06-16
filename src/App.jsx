import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Right1'>
      <h1 className='head'>CodeWrite</h1>
      <button class="bg- rgb(82, 5, 159)-500 hover:bg-rgb(82, 5, 159)-600 active:bg-black-700 focus:outline-none focus:ring focus:ring-violet-300 scroll-pl-5 border
      -solid border-black border-3">
  Start Coding..
</button>
      
       </div>
    </>
  )
}

export default App
