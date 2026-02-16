import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Home = ({ setIsLoggedIn }) => {
  const [jobs, setJobs] = useState([])
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [location, setLocation] = useState("")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [editingId, setEditingId] = useState(null)

  // ✅ NEW: saved jobs
  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("savedJobs")) || []
  )

  const navigate = useNavigate()

  const fetchJobs = async () => {
    try {
      setLoading(true)
      setError("")
      const res = await axios.get("http://localhost:5000/jobs")
      setJobs(res.data)
    } catch {
      setError("Failed to load jobs")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  // ✅ ADD / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !company || !location) return

    if (editingId !== null) {
      await axios.put(`http://localhost:5000/jobs/${editingId}`, {
        id: editingId,
        title,
        company,
        location,
      })
      setEditingId(null)
    } else {
      await axios.post("http://localhost:5000/jobs", {
        title,
        company,
        location,
      })
    }

    setTitle("")
    setCompany("")
    setLocation("")
    fetchJobs()
  }

  const deleteJob = async (id) => {
    if (!window.confirm("Are you sure?")) return
    await axios.delete(`http://localhost:5000/jobs/${id}`)
    fetchJobs()
  }

  const handleLogout = () => {
    localStorage.removeItem("auth")
    setIsLoggedIn(false)
    navigate("/login")
  }

  // ✅ SAVE / UNSAVE
  const toggleSave = (job) => {
    let updatedSaved

    if (savedJobs.find((item) => item.id === job.id)) {
      updatedSaved = savedJobs.filter((item) => item.id !== job.id)
    } else {
      updatedSaved = [...savedJobs, job]
    }

    setSavedJobs(updatedSaved)
    localStorage.setItem("savedJobs", JSON.stringify(updatedSaved))
  }

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen p-10 bg-gray-900 text-white space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold">Job Portal</h1>
        <button onClick={handleLogout} className="bg-black px-4 py-2 rounded">
          Logout
        </button>
      </div>

      {/* SEARCH */}
      <input
        className="border border-gray-600 bg-gray-800 p-2 w-80 rounded"
        placeholder="Search by title or company"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ADD / EDIT FORM */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">
          {editingId ? "Edit Job" : "Add Job"}
        </h2>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            className="p-2 rounded bg-gray-800 border border-gray-600"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="p-2 rounded bg-gray-800 border border-gray-600"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            className="p-2 rounded bg-gray-800 border border-gray-600"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="bg-black px-6 py-2 rounded">
            {editingId ? "Update" : "Add"}
          </button>
        </form>
      </div>

      {/* STATUS */}
      {loading ? (
        <p className="text-blue-400">Loading jobs...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : filteredJobs.length === 0 ? (
        <p className="text-gray-400">No jobs found</p>
      ) : (
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-gray-800 p-4 rounded space-y-2">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p>{job.company} • {job.location}</p>

              <div className="flex gap-3">

                {/* EDIT */}
                <button
                  onClick={() => {
                    setTitle(job.title)
                    setCompany(job.company)
                    setLocation(job.location)
                    setEditingId(job.id)
                  }}
                  className="bg-black px-4 py-1 rounded"
                >
                  Edit
                </button>

                {/* APPLY */}
                <button
                  onClick={() => alert(`Applied to ${job.company}`)}
                  className="bg-black px-4 py-1 rounded"
                >
                  Apply
                </button>

                {/* SAVE */}
                <button
                  onClick={() => toggleSave(job)}
                  className="bg-black px-4 py-1 rounded"
                >
                  {savedJobs.find((item) => item.id === job.id)
                    ? "Saved"
                    : "Save"}
                </button>

                {/* DELETE */}
                <button
                  onClick={() => deleteJob(job.id)}
                  className="bg-black px-4 py-1 rounded"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
