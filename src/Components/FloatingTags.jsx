import "../styles/floating.css"

const tags = [
  "React Developers",
  "Cyber Security",
  "AI Engineers",
  "Remote Jobs",
  "Node JS",
  "Full Stack",
  "Design",
  "Startups"
]

export default function FloatingTags() {
  return (
    <div className="floating">
      {tags.map((tag, i) => (
        <span key={i} className="tag">{tag}</span>
      ))}
    </div>
  )
}