export default function MyApplications(){

  const apps = JSON.parse(localStorage.getItem("applications")) || []

  return (
    <div className="jobs-layout">
      <h1>My Applications</h1>

      {apps.map(app => (
        <div className="job-row" key={app.id}>
          <div>
            <h3>Job ID: {app.jobId}</h3>
            <p>Status: {app.status}</p>
            <span>Applied: {app.appliedAt}</span>
          </div>
        </div>
      ))}

    </div>
  )
}