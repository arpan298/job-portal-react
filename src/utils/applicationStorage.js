export const saveApplication = (application) => {
  const existing = JSON.parse(localStorage.getItem("applications")) || []
  existing.push(application)
  localStorage.setItem("applications", JSON.stringify(existing))
}

export const hasApplied = (jobId) => {
  const existing = JSON.parse(localStorage.getItem("applications")) || []
  return existing.some(app => app.jobId === jobId)
}