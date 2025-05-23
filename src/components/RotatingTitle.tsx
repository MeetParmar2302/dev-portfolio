"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = ["Next.js Developer", "UI/UX Designer", "Tech Enthusiast"];

export function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000); // change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-2xl sm:text-2xl md:text-2xl font-bold">
      I am a{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="text-yellow-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
    </p>
  );
}
