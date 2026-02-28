import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Card() {

  const [open, setOpen] = useState(true)

  return (
    <>
    <AnimatePresence>
    {open && (
    <motion.div 

    initial={{
      opacity: 0,
      scale: 0.98,
      filter: "blur(10px)"
    }}

    animate={{
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    }}
    
    exit={{
      opacity: 0,
      scale: 0.98,
      filter: "blur(10px)"
    }}
    transition={{
      duration: 0.5,
      ease: "easeInOut"
    }}

    className="w-72 min-h-104 h-104
    p-4
    flex flex-col
    text-[10px]
    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
    rounded-xl">
        
        <h2 className="font-bold text-[10px]">Aceternity UI Components</h2>
        <p className="text-neutral-600 mt-2 text-[10px]">A collection of beautiful UI components</p>

        <div
        className="flex items-center justify-center">
            <button
            onClick={()=> setOpen(false)}
            className="flex items-center justify-center gap-1 mt-4 text-[10px]
            shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
            rounded-md px-2 py-1
            ">
                <div className="w-4 h-4 bg-black flex items-center justify-center rounded-md">
                    <span className="block w-2 h-2 bg-white rounded-full"/>
                </div>
                Acenternity

                <span className="text-xs -mt-0.5">ⅹ</span>
            </button>

        </div>

        <div className="relative flex-1 bg-slate-300 mt-4 border border-dashed border-neutral-400 rounded-lg">
            <motion.div 
            initial={{
                opacity: 0,
                scale: 0.9,
                filter: "blur(10px)"
            }}

            whileHover={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)"
            }}

            transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                mass: 1
            }}

            className="absolute inset-0 w-full h-full p-2 bg-white/80 flex flex-col justify-between divide-y-2 rounded-lg">
                <div className="p-2 flex items-center justify-between gap-2 bg-green-300/60 rounded-md">
                    <div className="px-4 py-1 bg-black text-white rounded-md">UI/UX</div>
                    <div>01 Aceternity UI</div>
                </div>

                <div className="p-2 flex items-center justify-between gap-2 bg-red-300/60 rounded-md">
                    <div className="px-4 py-1 bg-black text-white rounded-md">Chat</div>
                    <div>Chat UI AI for components</div>
                </div>

                <div className="p-2 flex items-center justify-between gap-2 bg-blue-300/60 rounded-md">
                    <div className="px-4 py-1 bg-black text-white rounded-md">Chat</div>
                    <div>Chat UI AI for components</div>
                </div>

                <div className="p-2 flex items-center justify-between gap-2 bg-orange-300/60 rounded-md">
                    <div className="px-4 py-1 bg-black text-white rounded-md">Chat</div>
                    <div>Chat UI AI for components</div>
                </div>

                <div className="p-2 flex items-center justify-between gap-2 bg-yellow-300/60 rounded-md">
                    <div className="px-4 py-1 bg-black text-white rounded-md">Chat</div>
                    <div>Chat UI AI for components</div>
                </div>

            </motion.div>
        </div>

    </motion.div>
    )}
    </AnimatePresence>
    </>
  )
}
