import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/onboarding.css"

export default function ResumeUpload(){

  const [file,setFile] = useState(null)
  const navigate = useNavigate()

  const finish = () => {
    if(file){
      localStorage.setItem("resumeName", file.name)
    }
    navigate("/profile-summary")   // 👈 go to summary page
  }

  return (
    <div className="onboard-page">
      <div className="onboard-card fade-in route-transition">

        <h1>Upload your resume</h1>
        <p className="sub">PDF or DOC up to 5MB</p>

        <label className="drop-zone">
          {file ? file.name : "Drag & drop or click to upload"}
          <input
            type="file"
            hidden
            onChange={e=>setFile(e.target.files[0])}
          />
        </label>

        <button className="primary-btn" onClick={finish}>
          Finish
        </button>

      </div>
    </div>
  )
}