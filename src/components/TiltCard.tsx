"use client";

import Image from "next/image";

interface Experience {
  icon: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export default function TiltCard({exp, index,}: {exp: Experience;index: number;}) {

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;

    const rotateX = -yPercent * 15; // Up/Down tilt
    const rotateY = xPercent * 15;  // Left/Right tilt

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const resetRotate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;

    card.style.setProperty("--rotate-x", `0deg`);
    card.style.setProperty("--rotate-y", `0deg`);
  };


  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotate}
      className={`card w-full md:w-[calc(50%-2rem)] p-6 border bg-blue-400/5 border-blue-400/30 rounded-lg shadow-lg ${
        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
      }`}   
    >
      <div className="flex items-center space-x-3"> 
        <Image
          src={`/icons/${exp.icon}.png`}
          alt={exp.title}
          width={48}
          height={48}
          className="h-12 w-12"
        />
        <div>
          <h3 className="text-xl font-bold text-yellow-400">{exp.title}</h3>
          <p className="text-lg font-semibold">{exp.company}</p>
          <p className="text-sm text-blue-200/60 mt-1">{exp.duration}</p>
        </div>
      </div>


      <p className="mt-4 font-medium text-blue-200/60">{exp.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {exp.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-4 py-1 text-sm font-medium rounded-full border border-blue-400/40 bg-blue-400/10 text-yellow-400 backdrop-blur-md"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
}
