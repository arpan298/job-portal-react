import { useNavigate } from "react-router-dom"

const order = [
  "/verifyemail",
  "/profile",
  "/preferences",
  "/resume"
]

export default function OnboardingNav({ currentPath }) {

  const navigate = useNavigate()
  const index = order.indexOf(currentPath)

  const prev = () => {
    if (index > 0) navigate(order[index - 1])
  }

  const next = () => {
    if (index < order.length - 1) navigate(order[index + 1])
  }

  return (
    <>
      {index > 0 && (
        <button className="nav-btn prev" onClick={prev}>
          ←
        </button>
      )}

      {index < order.length - 1 && (
        <button className="nav-btn next" onClick={next}>
          →
        </button>
      )}
    </>
  )
}