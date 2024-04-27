import { useState } from 'react'
import './App.css'

let GLOBAL_COUNT = 4;
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Todo 1",
    description:"Todo 1 on testing!!!"
  },{
    id: 2,
    title: "Todo 2",
    description:"Todo 2 on testing!!!"
  },{
    id: 3,
    title: "Todo 3",
    description:"Todo 3 on testing!!!"
  }])

  function addTodo(){
    setTodos([...todos, {
      id: GLOBAL_COUNT++,
      title: "New Todo",
      description: " Description of new Todo"
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Click To Add New Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  )
}



function Todo({title, description}) {
  return <div>
    <h2>
      {title}
    </h2>
    <h4>
      {description}
    </h4>
  </div>
}

export default App
