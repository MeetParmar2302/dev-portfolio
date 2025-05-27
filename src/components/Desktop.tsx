"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Projects from "./Projects";
import VerticalSection from "./VerticalSection";

export default function DesktopHome() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.6], ["0%", "-200vw"]);

  return (
    <>
    <section ref={targetRef} className="relative h-[320vh] hidden lg:block">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex w-[300vw]">
          <div className="w-screen h-screen">
            <Landing />
          </div>
          <div className="w-screen h-screen">
            <About />
          </div>
          <div className="w-screen h-screen">
            <Projects />
          </div>
        </motion.div>
      </div>
    </section>
    <section className="h-screen w-screen hidden lg:block">
      <VerticalSection />
    </section>
    </>
  );
}
