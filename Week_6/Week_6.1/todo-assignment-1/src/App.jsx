import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
      .then((res)=>{
        setTodos(res.data.todos);
      })
  },[])

  return (
    <div>
      {todos.map(todo => <Todo key ={todo.id }title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h2>
      {title}
    </h2>
    <h5>
      {description}
    </h5>
  </div>
}
export default App
