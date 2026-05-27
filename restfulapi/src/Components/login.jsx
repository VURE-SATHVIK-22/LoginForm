import { useState } from "react"
import "./login.css"

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password.")
      return
    }

    if (username === "admin" && password === "password") {
      setError("")
      onLoginSuccess()
      return
    }

    setError("Invalid username or password.")
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Sign in</h1>
        <p className="login-subtitle">Enter your credentials to continue.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="form-group">
            <span>Username</span>
            <input
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value)
                setError("")
              }}
              placeholder="Username"
            />
          </label>

          <label className="form-group">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
                setError("")
              }}
              placeholder="Password"
            />
          </label>

          {error && (
            <div className="error-message" role="alert" aria-live="polite">
              {error}
            </div>
          )}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;
