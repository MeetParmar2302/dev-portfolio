import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer } from "react-icons/si";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-300" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-purple-400" },
];

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t-2 border-gray-700 flex flex-col items-center justify-center">
      
      {/* Main Footer Content - Side by Side */}
      <div className="w-full max-w-screen-lg flex justify-around text-center sm:text-left py-6">

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold text-yellow-400">Quick Links</h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3 mt-2">
            <a onClick={() => scrollToSection("experience")} className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <FaBriefcase /> Experience
            </a>
            <a onClick={() => scrollToSection("projects")} className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <FaProjectDiagram /> Projects
            </a>
            <a onClick={() => scrollToSection("tools")} className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <FaCode /> Tools & Skills
            </a>
            <a onClick={() => scrollToSection("contact")} className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer">
              <FaEnvelope /> Contact
            </a>
          </div>
        </div>


        {/* Social Links */}
        <div>
          <h2 className="text-lg font-bold text-yellow-400">Connect</h2>
          <div className="flex flex-col space-y-2 mt-2">
            <a href="https://github.com/MeetParmar2302" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex items-center gap-2" aria-label="GitHub Profile">
              <FaGithub size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/meetparmar-iiitsurat/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex items-center gap-2" aria-label="LinkedIn Profile">
              <FaLinkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-lg font-bold text-yellow-400">Built With</h2>
          <div className="flex justify-center gap-6 mt-4">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center hover:scale-110 transition-transform">
                <tech.icon className={`w-8 h-8 ${tech.color}`} />
                <p className="text-sm text-gray-400 mt-1">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright & Branding */}
      <div className="text-center mt-4 border-t-2 border-gray-700 p-4 mx-auto">
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
