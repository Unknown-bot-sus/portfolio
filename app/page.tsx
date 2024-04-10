import { Nav } from "@/components/nav";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="w-full">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
