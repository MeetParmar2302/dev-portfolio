import Landing from "@/components/Landing";
import About from "@/components/About";
import MobileWarning from "@/components/MobileWarning";
import Projects from "./Projects";
import VerticalSection from "./VerticalSection";

export default function Home() {
  return (
    <div className="lg:hidden flex flex-col items-center gap-10 sm:gap-20">
      <MobileWarning />
      <div className="lg:hidden flex flex-col items-center gap-15">
        <Landing />
        <About />
        <Projects />
        <VerticalSection />
      </div>
    </div>
  );
}
