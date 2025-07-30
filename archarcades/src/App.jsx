import { useState, useEffect } from 'react'
import './App.css'
import Page from './Page'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = "Arch Arcades"
  }, [])

  return (
    <div className="App">
      <BrowserRouter basename="/archarcades">
        {/* <h1>Hello</h1> */}
        <Page/>
      </BrowserRouter>
    </div>
  )
}

export default App
