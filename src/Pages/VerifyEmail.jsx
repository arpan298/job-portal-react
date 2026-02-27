import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/onboarding.css"
export default function VerifyEmail(){

  const navigate = useNavigate()
  const [code,setCode] = useState("")
  const [sent,setSent] = useState(false)

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const sendCode = () => {
    setSent(true)
  }

  const verify = () => {
    if(!code) return alert("Enter verification code")
    localStorage.setItem("verified","true")
    navigate("/profile")
  }

  return (
    <div className="onboard-page">
      <div
        className={`onboard-card fade-in route-transition ${sent ? "sent-state" : ""}`}
        role="region"
        aria-label="Email verification step"
      >

        <h1>Verify your email</h1>
        <p className="sub">Secure your account to continue onboarding</p>

        <button className="primary-btn" onClick={sendCode}>
          {sent ? "Code Sent ✓" : "Send verification code"}
        </button>

        <input
          className="input"
          placeholder="Enter code"
          value={code}
          onChange={e=>setCode(e.target.value)}
        />

        <button className="primary-btn dark" onClick={verify}>
          Verify & Continue
        </button>

      </div>
    </div>
  )
}