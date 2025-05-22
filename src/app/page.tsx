import Greeting from "@/components/Greeting";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white space-y-4">
      <Greeting />
      <p className="text-xl">Portfolio Coming Soon 🚀</p>
    </main>
  );
}
