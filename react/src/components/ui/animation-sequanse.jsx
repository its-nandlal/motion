import { motion, useAnimate } from "motion/react";

export default function AnimationSequanse() {
  const [scope, animate] = useAnimate();

  const sequence = [
    [".text", { opacity: 0 }, { duration: 0.2 }],

    ["button", { width: "5rem", borderRadius: "1000px" }, { duration: 0.3, ease: "easeInOut" }],

    ["button", { rotateY: [0, 180, 0],   scale: [1, 1.2, 0.8, 1], }, { duration: 0.8, ease: "easeInOut" }],
    ["button", { background: "var(--color-green-500)", }, { duration: 1.5, at: "-0.99", ease: "easeInOut" }],

    [".check-icon", { opacity: [0,1] }, { duration: 0.2, at: "+0.2"}],

    [".check-icon path", { pathLength: 1 }, { duration: 0.5, ease: "easeOut" }],
  ];

  const startingAnimating = async () => {
    animate(sequence);
  };

  return (
    <div
      ref={scope}
      className="w-120 h-20 flex items-center justify-center relative"
      style={{ perspective: 1000 }}
    >
      <motion.button
        onClick={startingAnimating}
        initial={{ width: "20rem" }}
        className="relative h-20 rounded-lg 
        bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500
        text-white font-semibold
        cursor-pointer overflow-hidden"
      >
        <span className="text whitespace-nowrap">
          Purchase now ($168)
        </span>
      </motion.button>

      <motion.svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="#ffffff"
        strokeWidth={3}
        className="check-icon h-8 w-8 absolute inset-0 m-auto pointer-events-none"
        style={{ opacity: 0 }}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </motion.svg>
    </div>
  );
}