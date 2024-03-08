import { useState } from 'react'
import './App.css'
import Task from './components/Task'

function App() {
  const [count, setCount] = useState(0)
  const deleteTask = (index, list) => {
    let new_list = list.splice(index,1);
    return new_list
  }
  return (
    <>
      <h1 className='title '>To Do List </h1>
      <div className='postit'>
        <form>
          <input type="text" placeholder='Add a task...' />
        </form>
        <Task detail="Saludar" deleteTask={deleteTask}/>
        <Task detail="Saludar" deleteTask={deleteTask}/>
        <Task detail="Saludar" deleteTask={deleteTask}/>
        <div className='taskCount'>
          <p>{/* */} items left</p>
        </div>
      </div>
      <div className='postitEnd1'></div>
      <div className='postitEnd2'></div>
    </>
  )
}

export default App
