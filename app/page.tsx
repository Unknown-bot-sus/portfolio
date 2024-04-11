import { Nav } from "@/components/nav";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experiences } from "@/components/sections/experiences";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { experiences } from "@/lib/constants";
import { Metadata } from "next";

export default function Home() {
  return (
    <main className="w-full">
      <Nav />
      <Hero />
      <About />
      <Experiences experiences={experiences} />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
export const metadata: Metadata = {
  title: "Thar Lin",
};
