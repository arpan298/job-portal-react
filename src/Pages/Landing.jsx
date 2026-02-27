import Navbar from "../Components/Navbar"
import FloatingTags from "../Components/FloatingTags"
import Hero from "../Components/Hero"

export default function Landing(){
  return (
    <div style={{position:"relative"}}>
      <Navbar/>
      <FloatingTags/>
      <Hero/>
    </div>
  )
}