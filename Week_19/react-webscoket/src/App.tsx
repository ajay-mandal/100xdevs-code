import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");


  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('Connection established');
      setSocket(socket);
    }
    socket.onmessage = (message) => {
      setLatestMessage(message.data);
    }
    setSocket(socket);

    return () => {
      socket.close();
    }
  }, [])

  if(!socket) return <div>Connecting...</div>

  return (
    <>
      <input onChange={(e)=> {
        setMessage(e.target.value);
      }}></input>
      <button onClick={()=> {
        socket.send(message);
      }}>Send</button>
      {latestMessage }
    </>
  )
}

export default App
