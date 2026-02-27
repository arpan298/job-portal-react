import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/onboarding.css"
export default function Preferences(){

  const navigate = useNavigate()

  const [prefs,setPrefs] = useState({
    remote:true,
    alerts:true,
    salary:false,
    startups:true
  })

  const toggle = key =>
    setPrefs({...prefs,[key]:!prefs[key]})

  const save = () => {
    localStorage.setItem("prefs",JSON.stringify(prefs))
    navigate("/resume")
  }
  return (
    <div className="onboard-page">
 <div className="onboard-card fade-in route-transition">
        <h1>Customize your experience</h1>

        {Object.entries({
          remote:"Remote jobs only",
          alerts:"Job alerts",
          salary:"Show salary upfront",
          startups:"Startup focused roles"
        }).map(([key,label])=>(
          <div className="pref-row" key={key}>
            <span>{label}</span>
            <div
              className={`toggle ${prefs[key]?"active":""}`}
              onClick={()=>toggle(key)}
            />
          </div>
        ))}

        <button className="primary-btn" onClick={save}>
          Save & Continue
        </button>

      </div>
    </div>
  )
}