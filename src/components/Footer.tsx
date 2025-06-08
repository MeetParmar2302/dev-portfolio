import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer } from "react-icons/si";

const navigateToSection = (id: string) => {
  if (window.innerWidth < 1024) {
    window.location.href = `#${id}`; // Mobile: Redirect instantly
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); // Desktop: Smooth scrolling
  }
};

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-300" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Framer", icon: SiFramer, color: "text-purple-400" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-gray-700 flex flex-col items-center justify-center">
      
      {/* Main Footer Content - Side by Side */}
      <div className="w-full max-w-screen-lg flex flex-col lg:flex-row justify-around text-center sm:text-left py-6">

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start my-5">
          <h2 className="text-lg font-bold text-yellow-400">Quick Links</h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3 mt-2 justify-center items-center">
            <a onClick={() => navigateToSection("experience")} className="flex transition-colors justify-center lg:justify-start items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <FaBriefcase /> Experience
            </a>
            <a onClick={() => navigateToSection("tools")} className="flex transition-colors justify-center lg:justify-start items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <FaCode /> Tools & Skills
            </a>
            <a onClick={() => navigateToSection("projects")} className="flex transition-colors justify-center lg:justify-start items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <FaProjectDiagram /> Projects
            </a>
            <a onClick={() => navigateToSection("contact")} className="flex transition-colors justify-center lg:justify-start items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <FaEnvelope /> Contact
            </a>
          </div>
        </div>


        {/* Social Links */}
        <div className="flex flex-col items-center justify-center lg:items-start my-5">
          <h2 className="text-lg font-bold text-yellow-400">Connect</h2>
          <div className="flex lg:flex-col space-x-4 lg:space-y-2 mt-2">
            <a href="https://github.com/MeetParmar2302" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex items-center gap-2" aria-label="GitHub Profile">
              <FaGithub size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/meetparmar-iiitsurat/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex items-center gap-2" aria-label="LinkedIn Profile">
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col items-center text-center my-5">
          <h2 className="text-lg sm:text-md font-bold text-yellow-400">Built With</h2>
          <div className="flex justify-center gap-4 sm:gap-3 mt-3">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center hover:scale-105 sm:hover:scale-100 transition-transform">
                <tech.icon className={`w-8 sm:w-6 h-8 sm:h-6 ${tech.color}`} />
                <p className="text-sm sm:text-xs text-gray-400 mt-1">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright & Branding */}
      <div className="text-center mb-4 border-t-2 border-gray-700 p-4 mx-auto">
        <p className="text-yellow-400">
          <s className="text-gray-400">Copyright</s> All Have the Right to Copy
        </p>
        <p className="text-gray-400">
          Made with <span className="text-red-500">❤️</span> by Meet Parmar
        </p>
      </div>

    </footer>
  );
};

export default Footer;
