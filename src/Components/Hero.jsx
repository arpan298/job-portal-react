import { motion } from "framer-motion"
import "../styles/hero.css"

export default function Hero(){

  return (
    <div className="hero">

      <motion.h1
        initial={{ opacity:0, y:80, scale:0.95 }}
        animate={{ opacity:1, y:0, scale:1 }}
        transition={{ duration:1, ease:"easeOut" }}
      >
        Find what's next
      </motion.h1>

    </div>
  )
}