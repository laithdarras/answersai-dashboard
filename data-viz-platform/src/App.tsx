import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { useFirebaseAuth } from './hooks/useFirebaseAuth'

function App() {
  const { user, loading } = useFirebaseAuth()

  if (loading) return <div>Loading...</div>

  return (
    <Routes>
      <Route path="/" element={user ? <Dashboard /> : <Login />} />
    </Routes>
  )
}

export default App