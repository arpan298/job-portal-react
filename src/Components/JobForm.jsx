import { useEffect, useState } from "react"
import axios from "axios"

const JobForm = ({ refresh, editJob, setEditJob }) => {
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [location, setLocation] = useState("")

  useEffect(() => {
    if (editJob) {
      setTitle(editJob.title)
      setCompany(editJob.company)
      setLocation(editJob.location)
    }
  }, [editJob])

  const submit = async (e) => {
    e.preventDefault()
    if (editJob) {
      await axios.put(`http://localhost:5000/jobs/${editJob.id}`, { title, company, location })
      setEditJob(null)
    } else {
      await axios.post("http://localhost:5000/jobs", { title, company, location })
    }
    setTitle("")
    setCompany("")
    setLocation("")
    refresh()
  }

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded mb-4">
      <h2 className="font-semibold mb-2">{editJob ? "Edit Job" : "Add Job"}</h2>
      <input className="border p-2 w-full mb-2" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input className="border p-2 w-full mb-2" value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" required />
      <input className="border p-2 w-full mb-3" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" required />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {editJob ? "Update" : "Add"}
      </button>
    </form>
  )
}
export default JobForm
