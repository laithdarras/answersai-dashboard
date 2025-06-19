import { useState } from 'react'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'

export default function Login() {
  const { loginWithGoogle, loginWithEmail } = useFirebaseAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Sign in</h2>

      <button onClick={loginWithGoogle}>Continue with Google</button>

      <hr />

      <form
        onSubmit={(e) => {
          e.preventDefault()
          loginWithEmail(email, password)
        }}
      >
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}