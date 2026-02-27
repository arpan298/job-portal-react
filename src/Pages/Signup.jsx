import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import "../styles/auth.css"

export default function Signup() {

  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSignup = e => {
    e.preventDefault()

    if(!name || !email || !password){
      alert("Fill all fields")
      return
    }

    localStorage.setItem("auth","true")
    navigate("/interests")
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSignup}>
        <h2>Create account</h2>

        <input placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />

        <button className="primary full">Sign Up</button>

        <p className="switch">
          Already have account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}