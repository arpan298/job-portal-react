import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/interests.css"

export default function Interests() {

  const navigate = useNavigate()

  const [selected, setSelected] = useState({
    jobs:false,
    investing:false,
    recruiting:false,
    raising:false
  })

  const toggle = key => {
    setSelected({ ...selected, [key]: !selected[key] })
  }

  const handleContinue = () => {
    localStorage.setItem("interests", JSON.stringify(selected))
    navigate("/verifyemail")
  }

  return (
    <div className="interest-page">

      <div className="interest-card">

        <h1>Personalize your experience</h1>
        <p className="sub">
          Choose what you want to explore. You can change this anytime.
        </p>

        <div className="interest-grid">

          <div
            className={`interest-item ${selected.jobs ? "active" : ""}`}
            onClick={()=>toggle("jobs")}
          >
            <h3>Find Jobs</h3>
            <p>Explore curated opportunities from modern startups</p>
          </div>

          <div
            className={`interest-item ${selected.investing ? "active" : ""}`}
            onClick={()=>toggle("investing")}
          >
            <h3>Startup Investing</h3>
            <p>Discover companies raising capital</p>
          </div>

          <div
            className={`interest-item ${selected.recruiting ? "active" : ""}`}
            onClick={()=>toggle("recruiting")}
          >
            <h3>Hire Talent</h3>
            <p>Connect with skilled candidates</p>
          </div>

          <div
            className={`interest-item ${selected.raising ? "active" : ""}`}
            onClick={()=>toggle("raising")}
          >
            <h3>Raise Funding</h3>
            <p>Meet investors and grow your startup</p>
          </div>

        </div>

        <button className="continue-btn" onClick={handleContinue}>
          Continue
        </button>

        <p className="skip" onClick={handleContinue}>
          Skip for now
        </p>

      </div>

    </div>
  )
}