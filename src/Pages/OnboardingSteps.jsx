const steps = [
  "Verify Email",
  "Profile",
  "Preferences",
  "Resume"
]

export default function OnboardingSteps({ current }) {

  const currentIndex = steps.indexOf(current)
  const progressWidth = (currentIndex / (steps.length - 1)) * 100

  return (
    <div
      className="stepper modern-stepper"
      role="progressbar"
      aria-valuenow={progressWidth}
    >

      {/* animated progress line */}
      <div
        className="step-progress"
        style={{ width: `${progressWidth}%` }}
      />

      {steps.map((label, index) => {

        const completed = index < currentIndex
        const active = index === currentIndex

        return (
          <div
            key={label}
            className={`step ${active ? "active" : ""} ${completed ? "done" : ""}`}
          >

            {/* circle wrapper for glow animation */}
            <div className="step-circle-wrapper">

              <div className="step-circle">
                {completed ? "✓" : index + 1}
              </div>

            </div>

            <div className="step-label">
              {label}
            </div>

          </div>
        )
      })}

    </div>
  )
}