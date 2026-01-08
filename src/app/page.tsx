import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      
      {/* Spacer for scroll demonstration */}
      <section className="h-screen bg-transparent flex items-center justify-center">
        <h2 className="text-3xl font-mono opacity-10 uppercase tracking-[0.5em]">The Story Continues...</h2>
      </section>
    </main>
  );
}
