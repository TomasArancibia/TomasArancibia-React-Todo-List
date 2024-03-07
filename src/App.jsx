import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='title '>To Do List </h1>
      <div className='postit'>
        <form>
          <input type="text" placeholder='Add a task...' />
        </form>
      </div>
    </>
  )
}

export default App
