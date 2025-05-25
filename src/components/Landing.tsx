"use client";

import { RotatingTitle } from "@/components/RotatingTitle";
import SocialLinks from "./SocialLinks";
import FloatingProfile from "./FloatingProfile";

const Landing = () => {
  return (
    <>
        <main className="max-w-screen sm:min-w-screen sm:min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-5">
        
        <div className="flex flex-col-reverse lg:flex-row lg:gap-60 items-center justify-center gap-5">
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center space-y-4 text-center lg:text-left">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl font-bold transition-transform duration-300 hover:scale-105">Meet Parmar</h1>
    
        {/* Rotating Title */}
        <RotatingTitle />

        {/* Quote */}
        <p className="text-lg sm:text-xl font-medium text-center lg:text-left">
          Crafting elegant, performant web experiences that blend{" "}
          <span className="animated-gradient font-semibold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-[length:200%_auto] bg-clip-text text-transparent">
            creativity
          </span>{" "}
          {/* <br /> */}
          <span className="hidden sm:block"></span>
          with cutting-edge technology.
        </p>
        
        {/* Social Links */}
        <SocialLinks />

        {/* Quote */}
        <section className="flex items-center justify-center mt-4 space-x-2">
          <div className="h-10 sm:h-6 w-1 bg-yellow-400"></div>
          <p className="text-left text-blue-200/80">Turning lines of code into digital experiences that inspire and innovate.</p>
        </section>
        </div>

        <FloatingProfile />
        </div>

      </main>
    </>
  )
}

export default Landing