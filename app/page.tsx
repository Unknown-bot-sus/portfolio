import { Nav } from "@/components/nav";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experiences } from "@/components/sections/experiences";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { educations, experiences, certifications } from "@/lib/constants";
import { Metadata } from "next";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Experiences experiences={experiences} />
      <Projects />
      <Education certifications={certifications} educations={educations} />
      <Contact />
    </main>
  );
}
export const metadata: Metadata = {
  title: "Thar Lin",
};
