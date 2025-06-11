import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import TiltCard from "./TiltCard";

const ExperienceTimeline = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
  {
    icon: "teamwork",
    title: "Junior Placement Coordinator",
    company: "Training and Placement Cell, IIIT Surat",
    duration: "Apr 2025 - Present",
    description: "Currently assisting in coordinating placement activities, including company outreach and student preparation, while actively managing recruiter communication, student data and campus drives with the TnP team.",
    technologies: ["Figma", "MS Excel", "Communication", "Management", "Teamwork"]
  },
  {
    icon: "leader",
    title: "Design Lead",
    company: "IIITians Network",
    duration: "Jan 2025 - Present",
    description: "Currently leading design and content strategy at IIITians Network, crafting engaging visuals and stories while actively fostering collaboration, networking and knowledge sharing across the IIIT student community.",
    technologies: ["Figma", "Adobe Illustrator", "Canva", "Next.js", "Tailwind CSS", "TypeScript", "Team Management", "Branding", "Networking"]
  },
  {
    icon: "critical-thinking",
    title: "Junior Ruminate",
    company: "Ruminate - ECell, IIIT Surat",
    duration: "Mar 2024 - May 2025",
    description: "Contributed to entrepreneurial initiatives at E-Cell, IIIT Surat through event planning, startup outreach, and fostering a culture of innovation and collaboration on campus.",
    technologies: ["Figma", "Event Management", "Startup Ecosystem", "Marketing", "Public Speaking", "Networking"]
  },
  {
    icon: "design",
    title: "Junior Creator",
    company: "GDG, IIIT Surat",
    duration: "Nov 2024 - May 2025",
    description: "Designed visually compelling graphics and collaborated with the team to promote technical events and sessions as part of the GDG club at IIIT Surat.",
    technologies: ["Figma", "Canva", "Adobe Illustrator", "UI/UX Design", "Graphic Design", "Social Media"]
  },
  {
    icon: "adaptability",
    title: "Designer",
    company: "SARAS, IIIT Surat",
    duration: "Feb 2024 - May 2025",
    description: "Created visual content and promotional designs for SARAS at IIIT Surat, enhancing event branding, audience engagement, and the overall visual identity of the club.",
    technologies: ["UI/UX Design", "Poster Design", "Figma", "Adobe Illustrator", "Visual Identity", "Color Theory", "Typography"]
  }
];


  return (
    <div id="experience" className="w-screen flex flex-col justify-center items-center font-bold px-4 pt-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-center transition-transform duration-300 hover:scale-105 mb-15">Experience</h1>
        
        <div className="relative">
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-1 h-full"
            style={{ originY: 0 }}
          />
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 w-1 bg-yellow-400"
            style={{ scaleY, originY: 0, height: "100%" }}
          />

          <div className="space-y-6 md:space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 2.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start ml-4 px-8 md:ml-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="flex items-center justify-center min-w-[20px] absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  <div className="h-4 w-4 rounded-full bg-yellow-400 border-4 border-white shadow"></div>
                </div>

                <TiltCard key={index} exp={exp} index={index} />

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;