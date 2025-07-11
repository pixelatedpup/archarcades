import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './Page'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {document.title = "Arch Arcades"},[])
  return (
      <div class="App"> 
        <Page/>
      </div>
  )
}

export default App;
