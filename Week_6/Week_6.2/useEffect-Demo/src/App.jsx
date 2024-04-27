import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import { useTodo } from './hooks/useTodo';

function App() {

  const [number, setNumber] = useState(null);
  return (
    <div>
      <input onChange={(e) =>{ setNumber(e.target.value)}} placeholder="Enter the ID"></input><br/><br />
      <Todo id= {number} />
    </div>
  )
}


function Todo({id}){
  // const [todo, setTodo] = useState({});
  //     useEffect(()=>{
  //       if(id && id <= 10){
  //         axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
  //         .then((res)=>{
  //           setTodo(res.data.todo);
  //         })
  //       }
  //     }, [id]);

  // Custom hook UseCase
  const todo = useTodo({id});
  return <div>
    <h2>
      {todo.title}
    </h2>
    <h3>
      {todo.description}
    </h3>
  </div>
}
export default App
