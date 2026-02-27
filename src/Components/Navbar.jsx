import { Link } from "react-router-dom"
import "../styles/navbar.css"

export default function Navbar() {
  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="logo">
        jobnow<span>:</span>
      </div>

      {/* CENTER MENU */}
      <nav className="nav-center">
        <a>Discover</a>
        <a>For job seekers</a>
        <a>For companies</a>
      </nav>

      {/* RIGHT BUTTONS */}
      <div className="nav-actions">
        <Link to="/login" className="btn-outline">Log In</Link>
        <Link to="/signup" className="btn-dark">Sign Up</Link>
      </div>

    </header>
  )
}