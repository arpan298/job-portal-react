import { useNavigate } from "react-router-dom"
import "../styles/onboarding.css"

export default function ProfileSummary(){

  const navigate = useNavigate()

  const profile = JSON.parse(localStorage.getItem("profile") || "{}")
  const prefs = JSON.parse(localStorage.getItem("prefs") || "{}")
  const resume = localStorage.getItem("resumeName")

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <h1>Your Profile</h1>
        <p>Manage your professional presence</p>
      </div>

      {/* CONTENT GRID */}
      <div className="dashboard-grid">

        {/* LEFT PANEL */}
        <div className="dashboard-main">

          <div className="info-block">
            <h3>Basic Information</h3>
            <p><strong>Location:</strong> {profile.location || "Not set"}</p>
            <p><strong>Role:</strong> {profile.role || "Not set"}</p>
            <p><strong>Experience:</strong> {profile.experience || "Not set"}</p>
          </div>

          <div className="info-block">
            <h3>Preferences</h3>
            <p>Remote: {prefs.remote ? "Yes" : "No"}</p>
            <p>Alerts: {prefs.alerts ? "Yes" : "No"}</p>
            <p>Salary Visible: {prefs.salary ? "Yes" : "No"}</p>
          </div>

          <div className="info-block">
            <h3>Resume</h3>
            <p>{resume || "No resume uploaded"}</p>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="dashboard-side">

          <div className="side-card">
            <h4>Profile Strength</h4>
            <div className="progress-bar">
              <div style={{width:"80%"}}></div>
            </div>
            <p>80% Complete</p>
          </div>

          <button
            className="cta-button"
            onClick={()=>navigate("/jobs")}
          >
            Start Job Search
          </button>

        </div>

      </div>

    </div>
  )
}