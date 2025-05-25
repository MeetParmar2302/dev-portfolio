"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Landing from "@/components/Landing";
import About from "@/components/About";

export default function DesktopHome() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <section ref={targetRef} className="relative h-[132vh] hidden lg:block">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex w-[200vw]">
          <div className="w-screen">
            <Landing />
          </div>
          <div className="w-screen">
            <About />
          </div>
          {/* <div className="w-screen">
            <Landing />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
