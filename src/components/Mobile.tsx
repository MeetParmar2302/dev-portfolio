import Landing from "@/components/Landing";
import About from "@/components/About";
import MobileWarning from "@/components/MobileWarning";

export default function Home() {
  return (
    <div className="lg:hidden flex flex-col items-center gap-10 sm:gap-20">
      <MobileWarning />
      <div className="lg:hidden flex flex-col items-center gap-15 pb-10">
        <Landing />
        <About />
        {/* <Landing /> */}
      </div>
    </div>
  );
}
