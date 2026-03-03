import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (!ref.current) return;
      if (!ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return ref;
};

export default function LayoutCard() {
  const [current, setCurrent] = useState(null);
  const ref = useOutsideClick(() => setCurrent(null));

  // 🔒 Prevent background scroll
  useEffect(() => {
    if (current) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [current]);

  return (
    <div className="relative py-40 bg-gray-100 min-h-screen">
      <AnimatePresence>
        {current && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-10 bg-black/40 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              ref={ref}
              layoutId={`card-${current.title}`}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              className="fixed inset-0 z-20 m-auto py-4 h-fit w-96 rounded-2xl bg-white border border-neutral-300 p-6 space-y-4 shadow-2xl"
            >
              <motion.img
                layoutId={`image-${current.title}`}
                src={current.src}
                alt={current.title}
                className="h-60 w-full object-cover rounded-xl"
              />

              <motion.h2
                layoutId={`title-${current.title}`}
                className="font-bold text-lg"
              >
                {current.title}
              </motion.h2>

              {/* Staggered content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.15 }}
              >
                <p className="text-sm text-neutral-600 mb-3">
                  {current.description}
                </p>

                <div className="h-40 overflow-auto text-sm text-neutral-500">
                  {current.content()}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Card List */}
      <div
        className={`max-w-lg mx-auto flex flex-col gap-8 transition duration-300 ${
          current ? "blur-sm scale-95" : ""
        }`}
      >
        {cards.map((card) => (
          <motion.button
          drag
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={card.title}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="p-4 rounded-xl flex justify-between items-center bg-white shadow-md border border-neutral-200"
          >
            <div className="flex gap-4 items-center">
              <motion.img
                layoutId={`image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="h-20 w-20 object-cover rounded-xl"
              />

              <div className="text-left">
                <motion.h2
                  layoutId={`title-${card.title}`}
                  className="font-semibold"
                >
                  {card.title}
                </motion.h2>

                <p className="text-xs text-neutral-500">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

const cards = [
  {
    description: "Beautiful modern UI components for production apps.",
    title: "Aceternity UI",
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    content: () => (
      <p>
        A curated collection of animated and accessible UI components built
        with performance and design consistency in mind.
      </p>
    ),
  },
  {
    description: "AI powered chat interface for modern applications.",
    title: "AI Chat UI",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    content: () => (
      <p>
        Intelligent conversational UI built with streaming responses,
        markdown support and dynamic layout updates.
      </p>
    ),
  },
  {
    description: "Interactive 3D card animation without Three.js.",
    title: "3D Motion Card",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    content: () => (
      <p>
        Advanced tilt and depth effect using pure CSS transforms and motion
        values for smooth hardware accelerated animations.
      </p>
    ),
  },
  {
    description: "Data visualization dashboard with smart insights.",
    title: "Predictive Dashboard",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    content: () => (
      <p>
        Upload CSV or Excel files and generate automatic charts, analytics
        summaries and AI-based data insights.
      </p>
    ),
  },
  {
    description: "High performance animation library experiments.",
    title: "Motion Lab",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    content: () => (
      <p>
        A playground for advanced UI animations including parallax,
        layout transitions and interactive micro-interactions.
      </p>
    ),
  },
];