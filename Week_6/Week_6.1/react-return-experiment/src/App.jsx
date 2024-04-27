import React, { useState } from "react"

function App() {
  const [title, setTitle] = useState("ajay1");
  function updateTitle(){
    setTitle(Math.random());
  }
  return (
    <div>
    <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="ajay2"></Header>
      <Header title="ajay2"></Header>
    </div>
  )
}

const Header = React.memo(({title})=>{
  console.log("Re-render")
  return <div>
    {title}
  </div>
})

export default App
