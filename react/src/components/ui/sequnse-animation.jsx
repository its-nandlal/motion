import { motion, useAnimate } from "motion/react"




export default function SequnseAnimation() {

  const [scop, animate] = useAnimate()

  const satartingAnimiting = async () => {

    animate(".text", {
      display: "none"
    }, {
      duration: 0.1
    })

    await animate("button", {
      width: "0px",
      borderRadius: "50rem"
    }, {
      duration: 0.3
    })

    animate(".spining-circle", {
      opacity: 1,
      rotateY: [180, 0],
      scale: [0, 1.2, 0.8, 1]
    }, {
      duration: 1
    })
  }

  return (
    <div 
      ref={scop}
    className="relative w-120 h-20 flex items-center justify-center">
      <motion.button
      onClick={satartingAnimiting}
      style={{
        width: "20rem"
      }}
      className="h-20 rounded-lg bg-linear-to-r from-purple-500 via-violet-600 to-indigo-500 cursor-pointer overflow-hidden">
        <span className="text text-nowrap">
          Purchase now ($168)
        </span>
      </motion.button>

      <motion.div
      className="spining-circle absolute inset-0 mx-auto
      w-20 h-20 rounded-full bg-green-500 opacity-0 pointer-events-none
      text-white flex items-center justify-center">
        ✔️
      </motion.div>
    </div>
  )
}
