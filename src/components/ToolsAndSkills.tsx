import TechnologyCard from "@/components/TechnologyCard";

const technologies = [
  { title: "Next.js", description: "React framework for production.", iconPath: "/icons/nextjs.png" },
  { title: "React.js", description: "JavaScript library for building user interfaces.", iconPath: "/icons/reactjs.png" },
  { title: "TypeScript", description: "Typed JavaScript for scalability.", iconPath: "/icons/typescript.png" },
  { title: "TailwindCSS", description: "Utility-first CSS framework.", iconPath: "/icons/tailwindcss.png" }
];

const backendAndDatabase = [
  { title: "Express.js", description: "Web framework for Node.js.", iconPath: "/icons/expressjs.png" },
  { title: "MongoDB", description: "NoSQL database for modern applications.", iconPath: "/icons/mongodb.png" },
  { title: "Prisma", description: "Next-generation ORM for Node.js and TypeScript.", iconPath: "/icons/prisma.png" },
  { title: "PostgreSQL", description: "Relational database management system.", iconPath: "/icons/postgresql.png" }
];

const developmentTools = [
  { title: "GitHub", description: "Version control system for tracking changes.", iconPath: "/icons/github.png" },
  { title: "Postman", description: "API testing tool.", iconPath: "/icons/postman.png" },
  { title: "VS Code", description: "Code editor with rich ecosystem.", iconPath: "/icons/vscode.png" },
  { title: "Figma", description: "Design tool for creating user interfaces.", iconPath: "/icons/figma.png" }
];

const softSkills = [
  { title: "Communication", description: "Effective verbal and written communication.", iconPath: "/icons/communication.png" },
  { title: "Adaptability", description: "Ability to adjust to new conditions.", iconPath: "/icons/adaptability.png" },
  { title: "Problem Solving", description: "Analytical thinking to resolve issues.", iconPath: "/icons/problem-solving.png" },
  { title: "Critical Thinking", description: "Evaluating solutions and refining implementations.", iconPath: "/icons/critical-thinking.png" },
  { title: "Time Management", description: "Prioritizing tasks and managing time efficiently.", iconPath: "/icons/time-management.png" },
  { title: "Teamwork", description: "Collaborating effectively with others.", iconPath: "/icons/teamwork.png" },
  { title: "Attention to Detail", description: "Ensuring accuracy and thoroughness in work.", iconPath: "/icons/attention-to-detail.png" },
  { title: "Feedback Handling", description: "Incorporating suggestions to improve project outcomes.", iconPath: "/icons/feedback-handling.png" }
];


const ToolsAndSkills = () => {
  return (
    <section id="tools" className="w-screen flex flex-col justify-center items-center lg:items-start font-bold px-4 pt-6">
      <section className="flex flex-col items-center lg:items-start justify-center text-left px-4 pb-10">
      <h1 className="text-5xl sm:text-6xl font-bold text-center transition-transform duration-300 hover:scale-105 pb-4">Tools & Skills</h1>
       <p className="max-w-[800px] text-blue-200/60 text-center lg:text-left">
        My expertise combines technical proficiency with professional skills, enabling me to deliver comprehensive solutions while effectively collaborating with teams and stakeholders.
        </p>
      </section>

      
      <div className="flex justify-center items-center pb-10">
      <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-x-10 gap-y-10 justify-center items-center">
        
        {/* Section 1 */}
        <section className="flex flex-col items-center lg:items-start justify-center text-left px-2 sm:px-4 rounded-lg shadow-md">
          <h2 className="text-2xl">Core Technologies</h2>
          <p className="text-sm font-regular max-w-[800px] text-blue-200/60 text-center lg:text-left">
            Primary technologies I use for building modern web applications
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-4 py-2">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} title={tech.title} iconPath={tech.iconPath} />
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col items-center lg:items-start justify-center text-left px-2 sm:px-4 rounded-lg shadow-md">
          <h2 className="text-2xl">Backend & Database</h2>
          <p className="text-sm font-regular max-w-[800px] text-blue-200/60 text-center lg:text-left">
            Technologies I use for server-side development and data management  
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-4 py-2 justify-center items-center">
            {backendAndDatabase.map((tech, index) => (
              <TechnologyCard key={index} title={tech.title} iconPath={tech.iconPath} />
            ))}
          </div>
        </section>
      </div>
    </div>

    <section className="flex flex-col items-center lg:items-start justify-center text-left px-2 sm:px-4 rounded-lg shadow-md pb-10">
          <h2 className="text-2xl">Development Tools</h2>
          <p className="text-sm font-regular max-w-[800px] text-blue-200/60 text-center lg:text-left">
            Essential tools I use to enhance productivity and collaboration in software development
          </p>
          <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-x-4 lg:gap-x-8 py-2">
            {developmentTools.map((tool, index) => (
              <TechnologyCard key={index} title={tool.title} iconPath={tool.iconPath} />
            ))}
          </div>
        </section>

    <section className="flex flex-col justify-center items-center lg:items-start text-left px-2 sm:px-4 rounded-lg shadow-md pb-10">
          <h2 className="text-2xl text-center">Soft Skills & Professional Skills</h2>
          <p className="text-sm font-regular max-w-[800px] text-blue-200/60 text-center lg:text-left">
            Skills that complement my technical abilities and enhance team collaboration
          </p>
          <div className="grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-x-4 lg:gap-x-8 py-2 justify-center items-center">
            {softSkills.map((skill, index) => (
              <TechnologyCard key={index} title={skill.title} iconPath={skill.iconPath} />
            ))}
          </div>
        </section>
    </section>
  )
}

export default ToolsAndSkills