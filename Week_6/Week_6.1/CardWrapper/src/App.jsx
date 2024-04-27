import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div style={{display:"flex"}}>
      <CardWrapper>
        Boyz
      </CardWrapper>
      <CardWrapper>
        Billo Bagiya Da ke karage
      </CardWrapper>
    </div>
  )
}


function CardWrapper({children}){
return (
  <div style={{
    border: "1px solid black",
    padding: 10,
    margin: 10,
  }}>
    {children}
  </div>
)
}

export default App
