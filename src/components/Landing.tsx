"use client";

import { RotatingTitle } from "@/components/RotatingTitle";
import SocialLinks from "./SocialLinks";

const Landing = () => {
  return (
    <>
        <main className="sm:min-w-screen max-w-screen h-screen flex flex-col items-start lg:items-start justify-center text-center space-y-4 mx-5">
        
        {/* Name */}
        <h1 className="text-6xl font-bold">Meet Parmar</h1>
    
        {/* Rotating Title */}
        <RotatingTitle />

        {/* Quote */}
        <p className="text-lg sm:text-xl font-medium text-left">
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
          <p className="text-left">Turning lines of code into digital experiences that inspire and innovate.</p>
        </section>
      </main>
    </>
  )
}

export default Landing