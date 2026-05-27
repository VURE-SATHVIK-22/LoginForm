import { useState } from 'react'
import './App.css'
import Login from './Components/login'
import Home from './Components/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return isLoggedIn ? (
    <Home />
  ) : (
    <Login onLoginSuccess={() => setIsLoggedIn(true)} />
  )
}

export default App
