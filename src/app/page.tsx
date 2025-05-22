import Greeting from "@/components/Greeting";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center space-y-4">
      <Greeting />
      <p className="text-xl sm:text-2xl md:text-3xl font-medium">Portfolio Coming Soon 🚀</p>
    </main>
  );
}
