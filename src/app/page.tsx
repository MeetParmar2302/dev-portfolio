"use client";

import Landing from "@/components/Landing";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileWarning from "@/components/MobileWarning";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <>
      {isDesktop ? (
        <section ref={targetRef} className="relative h-[200vh]">
          <div className="sticky top-0 h-screen overflow-hidden flex items-center">
            <motion.div style={{ x }} className="flex w-[200vw]">
              <div className="w-screen">
                <Landing />
              </div>
              <div className="w-screen">
                <Landing />
              </div>
              <div className="w-screen">
                <Landing />
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        // Mobile layout: stacked sections
        <section className="flex flex-col overflow-hidden">
          <MobileWarning />
          <Landing />
          <Landing />
          <Landing />
        </section>
      )}
    </>
  );
}
