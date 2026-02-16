import axios from "axios"

const JobList = ({ jobs, refresh, setEditJob }) => {
  const applyJob = async (job) => {
    await axios.post("http://localhost:5000/applications", job)
    alert("Applied successfully")
  }

  const deleteJob = async (id) => {
    if (confirm("Delete job?")) {
      await axios.delete(`http://localhost:5000/jobs/${id}`)
      refresh()
    }
  }

  return (
    <div className="space-y-3">
      {jobs.map(job => (
        <div key={job.id} className="bg-white p-4 rounded flex justify-between">
          <div>
            <h3 className="font-bold">{job.title}</h3>
            <p>{job.company} • {job.location}</p>
          </div>
          <div className="space-x-3">
            <button onClick={() => setEditJob(job)} className="text-blue-600">Edit</button>
            <button onClick={() => applyJob(job)} className="text-green-600">Apply</button>
            <button onClick={() => deleteJob(job.id)} className="text-red-600">Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default JobList
