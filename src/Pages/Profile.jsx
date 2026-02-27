import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/onboarding.css"
export default function Profile(){

  const navigate = useNavigate()

  const [form,setForm] = useState({
    location:"",
    role:"",
    experience:"",
    student:false
  })

  const update = e =>
    setForm({...form,[e.target.name]:e.target.value})

  const submit = () => {
    localStorage.setItem("profile",JSON.stringify(form))
    navigate("/preferences")
  }
  return (
    <div className="onboard-page">
 <div className="onboard-card fade-in route-transition">
        <h1>Create your profile</h1>
        <p className="sub">Help us personalize your experience</p>

        <input className="input"
          name="location"
          placeholder="City / Country"
          onChange={update}
        />

        <select className="input" name="role" onChange={update}>
          <option>Select role</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Designer</option>
        </select>

        <select className="input" name="experience" onChange={update}>
          <option>Years of experience</option>
          <option>0-1</option>
          <option>2-4</option>
          <option>5+</option>
        </select>

        <button className="primary-btn" onClick={submit}>
          Continue
        </button>

      </div>
    </div>
  )
}