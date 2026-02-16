import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()   // 🔥 THIS STOPS PAGE REFRESH

    if (!email || !password) {
      alert("Please enter email and password")
      return
    }

    localStorage.setItem("auth", "true")
    setIsLoggedIn(true)

    navigate("/", { replace: true })   // 🔥 FORCE REDIRECT
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded w-80 space-y-4"
      >
        <h2 className="text-white text-2xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"   // 🔥 MUST be submit
          className="w-full bg-blue-600 p-2 rounded text-white font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
