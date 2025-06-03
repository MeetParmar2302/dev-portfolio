import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Library Management System",
    description: "Modern and role-based LMS with secure auth and responsive UI.",
    image: "/lms.png",
    tech: ["Next.js", "TailwindCSS", "PostgreSQL", "Clerk", "ImageKit"],
    githubLink: "https://github.com/MeetParmar2302/library-management-system",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    image: "/portfolio.png",
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
    liveLink: "https://meetparmar.vercel.app/",
    githubLink: "https://github.com/MeetParmar2302/dev-portfolio",
  },
];

export default function Projects() {
  return (
    <main id="projects" className="sm:min-w-screen max-w-screen min-h-screen flex flex-col items-center lg:items-start justify-center text-left space-y-10 px-5">

      <h1 className="text-6xl font-bold text-center transition-transform duration-300 hover:scale-105">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative border rounded-lg p-5 max-w-[375px] bg-blue-400/10 backdrop-blur-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 hover:bg-blue-400/20 cursor-pointer flex flex-col items-center"
          >
            {/* Project Image */}
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={320}
                height={200}
                className="rounded-lg mb-3 shadow-md"
              />
            )}

            {/* Title & Description */}
            {project.title && <h3 className="text-xl font-bold text-yellow-400 mb-1">{project.title}</h3>}
            {project.description && <p className="text-sm text-blue-200/60 text-center">{project.description}</p>}

            {/* Tech Stack */}
            {project.tech && project.tech.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 my-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-blue-400/40 bg-blue-400/10 text-yellow-400 backdrop-blur-md hover:bg-blue-400/20 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex gap-5 mt-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="text-yellow-400 flex items-center gap-2 hover:underline hover:text-yellow-300 transition-all"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="text-yellow-400 flex items-center gap-2 hover:underline hover:text-yellow-300 transition-all"
                >
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
