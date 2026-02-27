import { Routes, Route } from "react-router-dom"
import MyApplications from "./Pages/MyApplications"
import Landing from "./Pages/Landing"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Interests from "./Pages/Interests"
import VerifyEmail from "./Pages/VerifyEmail"
import Profile from "./Pages/Profile"
import Preferences from "./Pages/Preferences"
import ResumeUpload from "./Pages/ResumeUpload"
import Jobs from "./Pages/Jobs"
import ApplyJob from "./Pages/ApplyJob"
import ProfileSummary from "./Pages/ProfileSummary"
export default function App() {
  return (
    <Routes>
    
    
<Route path="/apply/:id" element={<ApplyJob />} />
  <Route path="/applications" element={<MyApplications />} />
      <Route path="/profile-summary" element={<ProfileSummary />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/interests" element={<Interests />} />
      <Route path="/verifyemail" element={<VerifyEmail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/resume" element={<ResumeUpload />} />
    </Routes>
  )
}