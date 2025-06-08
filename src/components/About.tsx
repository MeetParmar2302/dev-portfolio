import React from 'react'
import { FaCode, FaPencilRuler, FaServer } from 'react-icons/fa'
import Image from 'next/image'

const About = () => {
  return (
    <>
        <main className="sm:min-w-screen max-w-screen min-h-screen flex flex-col items-center lg:items-start justify-center text-left space-y-4 px-5">

            <h1 className="text-6xl font-bold mb-4 text-center transition-transform duration-300 hover:scale-105">
            About <span className="text-yellow-400 group-hover:text-yellow-500">Me</span>
            </h1>


            <p className="md:text-xl max-w-[800px] text-center lg:text-left">
            Passionate about crafting solutions through code. I thrive on solving complex problems and bringing ambitious web designs to life, specializing in modern web technologies and intuitive user experiences.
            </p>

            <section className="flex flex-col gap-6 justify-center items-center lg:justify-start lg:items-start pt-4">
                {/* <h2 className="text-4xl font-bold text-yellow-400 text-center lg:text-left">Education</h2> */}

                <div className="w-80 h-full lg:w-135 lg:h-30 p-4 sm:p-6 rounded-xl border border-blue-400/30 bg-blue-400/5 shadow-lg flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                    {/* College Logo */}
                    <Image src="/iiit_surat_logo.png" alt="XYZ University Logo" width={4000} height={4000} className="h-full w-20 object-contain" />

                    {/* Education Text */}
                    <div className="flex flex-col text-white">
                    <h3 className="text-lg sm:text-xl font-bold flex items-center">
                     BTech in Computer Science & Engineering
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-200/60">Indian Institute of Information Technology, Surat</p>
                    <p className="text-xs sm:text-sm text-blue-200/60">2023 - 2027</p>
                    </div>
                </div>
            </section>


            <section className="flex flex-col flex-wrap md:flex-row gap-6 justify-center items-center lg:justify-start lg:items-start pt-4">
                {/* Frontend Dev Box */}
                <div className="w-80 h-30 p-6 rounded-xl border border-blue-400/30 bg-blue-400/5 shadow-lg text-white flex flex-col justify-between transition-transform duration-300 hover:scale-105">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                    <FaCode className="mr-2 text-yellow-400 scale-115" /> Frontend Development
                    </h3>
                    <p className="text-sm text-blue-200/60">Building responsive UIs with React, Next.js, Tailwind.</p>
                </div>

                {/* UI/UX Design Box */}
                <div className="w-80 h-30 p-6 rounded-xl border border-blue-400/30 bg-blue-400/5 shadow-lg text-white flex flex-col justify-between transition-transform duration-300 hover:scale-105">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                    <FaPencilRuler className="mr-2 text-yellow-400" /> UI/UX Design
                    </h3>
                    <p className="text-sm text-blue-200/60">Designing intuitive user interfaces with Figma.</p>
                </div>

                {/* Backend Dev Box */}
                <div className="w-80 h-30 p-6 rounded-xl border border-blue-400/30 bg-blue-400/5 shadow-lg text-white flex flex-col justify-between transition-transform duration-300 hover:scale-105">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                    <FaServer className="mr-2 text-yellow-400" /> Backend & APIs
                    </h3>
                    <p className="text-sm text-blue-200/60">Creating REST APIs with Node.js, Express, MongoDB.</p>
                </div>
            </section>
            
            <section className="flex flex-wrap gap-3 my-4 justify-center items-center">
                {["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js"].map((tech) => (
                    <span
                    key={tech}
                    className="px-4 py-1 text-sm font-medium rounded-full border border-blue-400/40 bg-blue-400/10 text-yellow-400 backdrop-blur-md hover:bg-blue-400/20 hover:scale-105 hover:border-blue-400 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                    {tech}
                    </span>
                ))}
            </section>

            
            <p className='max-w-[800px] text-blue-200/60 text-center lg:text-left'>My approach combines technical expertise with a deep understanding of user needs. Every line of code I write is guided by the principles of clean architecture, performance optimization, and intuitive user experience.</p>
        </main>
    </>
  )
}

export default About