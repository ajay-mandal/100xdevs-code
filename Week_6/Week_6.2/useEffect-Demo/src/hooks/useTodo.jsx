//Custom hook

import { useState , useEffect} from "react";
import axios from 'axios';
export function useTodo({id}){
    const [todo, setTodo] = useState({});
    useEffect(()=>{
      if(id && id <= 10){
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then((res)=>{
          setTodo(res.data.todo);
        })
      }
    }, [id]);
    return todo;
}
