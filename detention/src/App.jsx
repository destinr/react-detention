import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Writer from "./components/Writer.jsx"

function App() {
  const [phrase, setPhrase] = useState("I will never mutate state or props directly")
  const [counter, setCounter] = useState(0)

  function writeItOut(){
    let lines = []
    for(let i = 0; i < 101; i++){
      lines.push(<Writer count={`${i}`} phrase = {phrase}/>)
    }
    return lines
  }

  return (
    <div className="App">
      {writeItOut()}
    </div>
  )
}

export default App
