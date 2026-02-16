import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import Home from "./Pages/Home"
import Login from "./Pages/Login"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("auth") === "true"
  )

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Home setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/login"
        element={
          !isLoggedIn ? (
            <Login setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  )
}

export default App
