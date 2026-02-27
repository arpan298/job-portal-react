import { useNavigate, useParams } from "react-router-dom"
import { saveApplication, hasApplied } from "../utils/applicationStorage"
import ResumeUpload from "./ResumeUpload"

export default function ApplyJob(){

  const navigate = useNavigate()
  const { id } = useParams()   // ✅ FIX 1: get job id from URL

  const submitApplication = () => {

    if(hasApplied(id)){
      alert("You already applied for this job")
      return
    }

    // ✅ FIX 2: get uploaded resume from storage
    const resume = localStorage.getItem("resume")

    if(!resume){
      alert("Upload resume first")
      return
    }

    const profile = JSON.parse(localStorage.getItem("profile"))

    const application = {
      id: Date.now(),
      jobId: id,
      applicantName: profile?.name || "Candidate",
      email: profile?.email || "Not provided",
      resume: resume,
      status: "Applied",
      appliedAt: new Date().toISOString()
    }

    saveApplication(application)

    alert("Application submitted successfully 🎉")
    navigate("/jobs")
  }

  return (
    <div className="onboard-page">
      <div className="onboard-card">

        <h1>Apply for job</h1>

        {/* keep your ResumeUpload component */}
        <ResumeUpload />

        <button className="primary-btn" onClick={submitApplication}>
          Submit Application
        </button>

      </div>
    </div>
  )
}