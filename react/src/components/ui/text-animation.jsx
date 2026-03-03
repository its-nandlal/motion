import { motion, stagger, useAnimate } from "motion/react"
import { useEffect } from "react"

export default function TextAnimation() {

  const [scope, animate] = useAnimate()

  const text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sunt cum animi delectus quis doloribus est officiis illo ex? Velit?"

  useEffect(()=>{
    startAnimating()
  },[])

  const startAnimating = () => {
    animate("span",{
      opacity: 1,
      y: 0,
      filter: "blur(0px)"
    }, {
      duration: 0.5,
      ease: "backIn",
      delay: stagger(0.05)
    })
  }

  return (
    <div
    ref={scope}
    className="w-1/2 text-2xl tracking-wide">
      {text.split(" ").map((char, i) => (
        <motion.span
        key={i}
        style={{
          opacity: 0,
          y: 10,
          filter: "blur(10px)"
        }}
        className=" inline-block">
          {char} &nbsp;
        </motion.span>
      ))}
    </div>
  )
}
