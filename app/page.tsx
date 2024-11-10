import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Metadata } from "next";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  );
}
export const metadata: Metadata = {
  title: "Thar Lin",
};
