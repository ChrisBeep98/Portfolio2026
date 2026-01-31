import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Process />
    </main>
  );
}
