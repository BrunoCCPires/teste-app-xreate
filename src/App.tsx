import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <div className="app">
      <h1>Welcome to Test App</h1>
      
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="welcome-message">
          <h2>Hello, {name}!</h2>
          <button onClick={() => setSubmitted(false)}>Start Over</button>
        </div>
      )}
    </div>
  )
}

export default App