"use client";

import { TransitionRouter } from "next-transition-router";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const BLOCK_SIZE = 60;

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const transitionGridRef = useRef<HTMLDivElement | null>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  const createTransitionGrid = () => {
    if (!transitionGridRef.current) return;

    const container = transitionGridRef.current;
    container.innerHTML = "";
    blocksRef.current = [];

    const gridWidth = window.innerWidth;
    const gridHeight = window.innerHeight;

    const columns = Math.ceil(gridWidth / BLOCK_SIZE);
    const rows = Math.ceil(gridHeight / BLOCK_SIZE);

    const offsetX = (gridWidth - columns * BLOCK_SIZE) / 2;
    const offsetY = (gridHeight - rows * BLOCK_SIZE) / 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const block = document.createElement("div");

        block.style.position = "absolute";
        block.style.width = `${BLOCK_SIZE}px`;
        block.style.height = `${BLOCK_SIZE}px`;
        block.style.left = `${col * BLOCK_SIZE + offsetX}px`;
        block.style.top = `${row * BLOCK_SIZE + offsetY}px`;
        block.style.backgroundColor = "#000";

        container.appendChild(block);
        blocksRef.current.push(block);
      }
    }

    gsap.set(blocksRef.current, { opacity: 0 });
  };

useEffect(() => {
  createTransitionGrid();

  window.addEventListener("resize", createTransitionGrid);

  // 👇 First Load Animation
  const ctx = gsap.context(() => {
    gsap.set(blocksRef.current, { opacity: 1 });

    gsap.to(blocksRef.current, {
      opacity: 0,
      duration: 0.05,
      ease: "power2.inOut",
      stagger: { amount: 0.6, from: "random" },
    });
  });

  return () => {
    window.removeEventListener("resize", createTransitionGrid);
    ctx.revert();
  };
}, []);
  return (
    <TransitionRouter
      auto

      leave={(next) => {
        const tween = gsap.to(blocksRef.current, {
          opacity: 1,
          duration: 0.05,
          ease: "power2.inOut",
          stagger: { amount: 0.5, from: "random" },
          onComplete: next,
        });

        console.log("Start")
        
        return () => tween.kill();
      }}

      enter={(next) => {
        gsap.set(blocksRef.current, { opacity: 1 });

        const tween = gsap.to(blocksRef.current, {
          opacity: 0,
          duration: 0.05,
          delay: 0.3,
          ease: "power2.inOut",
          stagger: { amount: 0.5, from: "random" },
          onComplete: next,
        });

        console.log("end")

        return () => tween.kill();
      }}
    >
      <div
        ref={transitionGridRef}
        className="fixed inset-0 pointer-events-none z-[9999]"
      />
      {children}
    </TransitionRouter>
  );
}