import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/onboarding.css"
import { hasApplied } from "../utils/applicationStorage"

export default function JobSearch(){

  const navigate = useNavigate()
  const [query,setQuery] = useState("")

  const jobs = [
    {title:"Frontend Developer", company:"Google", location:"Remote", salary:"₹12–18 LPA", type:"Full Time"},
    {title:"Backend Engineer", company:"Amazon", location:"Bangalore", salary:"₹15–25 LPA", type:"Full Time"},
    {title:"UI Designer", company:"Adobe", location:"Remote", salary:"₹10–16 LPA", type:"Contract"},
    {title:"Data Analyst", company:"Microsoft", location:"Hyderabad", salary:"₹9–14 LPA", type:"Full Time"},
  ]

  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(query.toLowerCase()) ||
    job.company.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="jobs-layout">

      <div className="jobs-header-modern">
        <input
          placeholder="Search job title, skill or company..."
          value={query}
          onChange={e=>setQuery(e.target.value)}
        />
      </div>

      <div className="jobs-container">

        <div className="jobs-sidebar">
          <h3>Filters</h3>
          <label><input type="checkbox"/> Remote</label>
          <label><input type="checkbox"/> Full-time</label>
          <label><input type="checkbox"/> 10+ LPA</label>
        </div>

        <div className="jobs-results">

          {filtered.length === 0 && (
            <p>No jobs found</p>
          )}

          {filtered.map((job,i)=>(
            <div className="job-row premium" key={i}>

              <div className="job-left">
                <div className="company-logo-circle"></div>

                <div>
                  <h3>{job.title}</h3>
                  <p>{job.company} • {job.location}</p>

                  <div className="job-badges">
                    <span className="salary-badge">{job.salary}</span>
                    <span className="type-badge">{job.type}</span>
                  </div>
                </div>
              </div>

              {/* ✅ FIXED BUTTON */}
              <button
                className="apply-modern"
                disabled={hasApplied(i)}
                onClick={()=>navigate(`/apply/${i}`)}
              >
                {hasApplied(i) ? "Applied ✓" : "Apply"}
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}