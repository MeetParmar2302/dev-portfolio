import React from 'react'

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

            <section className="flex flex-col flex-wrap md:flex-row gap-6 justify-center items-center lg:justify-start lg:items-start pt-4">
                <div className="w-80 h-40 p-6 rounded-xl border border-blue-400/30 bg-blue-400/5 backdrop-blur-md shadow-lg text-white flex flex-col justify-between transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/20 hover:bg-blue-400/10 cursor-default">
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Frontend Development</h3>
                    <p className="text-sm text-blue-200/60">
                        Building responsive and interactive user interfaces using React, Next.js, and Tailwind CSS.
                    </p>
                </div>

                <div className="w-80 h-40 p-6 rounded-xl border border-blue-400/30 bg-blue-400/5 backdrop-blur-md shadow-lg text-white flex flex-col justify-between transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/20 hover:bg-blue-400/10 cursor-default">
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">UI/UX Design</h3>
                    <p className="text-sm text-blue-200/60">
                        Designing intuitive and visually appealing interfaces using Figma with a focus on user experience.
                    </p>
                </div>

                <div className="w-80 h-40 p-6 rounded-xl border border-blue-400/30 bg-blue-400/5 backdrop-blur-md shadow-lg text-white flex flex-col justify-between transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/20 hover:bg-blue-400/10 cursor-default">
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Backend & APIs</h3>
                    <p className="text-sm text-blue-200/60">
                        Creating performant REST APIs with Node.js, Express, and integrating databases like MongoDB and PostgreSQL.
                    </p>
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