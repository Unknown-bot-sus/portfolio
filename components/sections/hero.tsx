import Image from "next/image";
import { HoverFlipText } from "../ui/hoverFlipText";

export const Hero = () => {
  return <section className="grid grid-cols-2">
    <div className="h-[80vh] relative">
      <Image src="/dumbel.svg" alt="dumbel icon" width={250} height={0} className="absolute left-1/2 bottom-0 animate-drop" />
    </div>
    <div className="flex flex-col justify-center items-center gap-28">
      <HoverFlipText primaryText="မင်္ဂလာပါ" secondaryText="Welcome" className="w-72 h-20" />
      <span className="text-primary">
        I am a fullstack programmer from Myanmar. I am passionate about coding.
      </span>
    </div>
  </section>;
};
