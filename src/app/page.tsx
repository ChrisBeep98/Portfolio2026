import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Marquee from "@/components/sections/Marquee";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Marquee />
      <Projects />
      <Process />
    </main>
  );
}
