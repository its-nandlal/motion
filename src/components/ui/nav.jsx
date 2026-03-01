import { motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const links = ["Home", "About", "Projects", "Contact"];

  const [active, setActive] = useState(0); // default selected index
  const [hovered, setHovered] = useState(null);

  const currentIndex = hovered !== null ? hovered : active;

  return (
    <div className="w-full flex justify-center mt-20">
      <nav
        className="relative flex gap-2 bg-neutral-900 p-2 rounded-full"
        onMouseLeave={() => setHovered(null)}
      >
        {links.map((link, index) => (
          <div
            key={link}
            onMouseEnter={() => setHovered(index)}
            onClick={() => setActive(index)}
            className="relative px-6 py-2 text-sm font-medium cursor-pointer text-white"
          >
            {currentIndex === index && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute inset-0 bg-white rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              />
            )}

            <span className="relative z-10 mix-blend-difference">
              {link}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
}