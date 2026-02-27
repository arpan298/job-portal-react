import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import "../styles/auth.css"

export default function Login() {

  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = e => {
    e.preventDefault()

    if(!email || !password){
      alert("Enter email & password")
      return
    }

    localStorage.setItem("auth","true")

    const verified = localStorage.getItem("verified")
    if(verified==="true") navigate("/home")
    else navigate("/verifyemail")
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <h2>Welcome back</h2>

        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />

        <button className="primary full">Log In</button>

        <p className="switch">
          No account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  )
}