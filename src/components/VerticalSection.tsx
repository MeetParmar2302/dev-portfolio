import ContactForm from "./ContactForm";
import Experience from "./Experience";
import Footer from "./Footer";
import ToolsAndSkills from "./ToolsAndSkills";

const ThirdSection = () => {
  return (
    <div className="flex flex-col overflow-hidden items-center justify-center">
      {/* Tools */}
      <ToolsAndSkills />

      {/* Experience */}
      <Experience />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ThirdSection;
