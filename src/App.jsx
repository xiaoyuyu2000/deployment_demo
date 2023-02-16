import { useState } from 'react'
import scrimbaLogo from './assets/scrimba-logo.svg'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <a href="https://scrimba.com/dashboard#overview" target="_blank">
          <img src={scrimbaLogo} className="logo scrimba" alt="Scrimba logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>I'm learning React from Scrimba now.</h2>
      <p>And I'm making progress now.</p>
      <p>---RR</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
