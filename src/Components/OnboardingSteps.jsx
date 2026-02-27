const flowMap = {
  "Verify Email": ["Verify Email", "Profile"],
  "Profile": ["Verify Email", "Profile"],
  "Preferences": ["Verify Email", "Profile", "Preferences"],
  "Resume": ["Verify Email", "Profile", "Preferences", "Resume"]
}

export default function OnboardingSteps({ current }) {

  const steps = flowMap[current] || ["Verify Email", "Profile"]

  const currentIndex = steps.indexOf(current)
  const progressWidth =
    steps.length > 1
      ? (currentIndex / (steps.length - 1)) * 100
      : 0

  return (
    <div className="stepper modern-stepper">

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