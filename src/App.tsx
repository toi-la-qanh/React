import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Test from './index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Test />
      
    </div>
  )
}

export default App
