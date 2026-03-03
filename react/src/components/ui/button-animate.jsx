import { motion } from "motion/react"

export default function App() {
  return (
    <div 
    className='h-screen w-full bg-neutral-900 flex items-center justify-center
    [perspective::1000px] transform-3d'
    style={{
      backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)`,
      backgroundSize: "8px 8px",
      backgroundRepeat: "repeat"
    }}>

      <motion.button 
      whileHover={{
        rotateX: 25,
        rotateY: 0,
        boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)",
        y: [5,-5,0]
      }}

      whileTap={{
        y: 10
      }}

      transition={{
        duration: 1,
        ease: "easeInOut"
      }}

      style={{
        translateZ: 100
      }}


      className="relative group bg-black text-white text-xl px-12 py-4 rounded-lg shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">

        <span className="group-hover:text-cyan-500 eaase-in-out duration-300">
          Subscribe
        </span>

        <span className="absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>

        <span className="absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-1 w-3/4 mx-auto blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

      </motion.button>

    </div>
  )
}
