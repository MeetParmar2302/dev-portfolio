import Experience from "./Experience";
import ToolsAndSkills from "./ToolsAndSkills";

const ThirdSection = () => {
  return (
    <div className="flex flex-col overflow-hidden items-center justify-center">
      {/* Tools */}
      <ToolsAndSkills />

      {/* Experience */}
      <Experience />

      {/* Contact Form */}
      <section id="contact" className="h-screen w-screen flex items-center justify-center text-4xl font-bold">Contact Form</section>

      {/* Footer */}
      <footer className="h-40 w-screen flex items-center justify-center text-4xl font-bold">Footer</footer>
    </div>
  );
};

export default ThirdSection;
