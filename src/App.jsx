import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component01 from './components/Component01'

function App() {
  const [count, setCount] = useState(0)

  const nombre = "Gerardo"
  const apellido = "Jatipito"

  const ficha = {
    grupo: "0",
    factor: "+",
    cascada: 102
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          La cuenta es: {count}
        </button>
      </div>
      <hr />
      <Component01 nombre= {"Gerardo"} apellido={apellido} ficha= {ficha}/>

    </>
  )
}

export default App
