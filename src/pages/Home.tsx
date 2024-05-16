import Contact from "../components/home/Contact";
import HeroSection from "../components/home/HeroSection";
import Services from "../components/home/Services";
import Navbar from "../components/navbar/Navbar";
import { SparklesCore } from "../components/ui/Sparkles";
import { cn } from "../utils/cn";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="relative">
      <Navbar />
      <div className="w-full flex flex-col gap-8 relative ">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full absolute z-[-1]"
          particleColor="#FFFFFF"
        />
        <HeroSection />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export function GradientText({ children, className }: any) {
  return (
    <span
      className={cn(
        `bg-gradient-to-r from-blue-400 via-indigo-300 to-white  text-transparent bg-clip-text`,
        className
      )}
    >
      {children}
    </span>
  );
}
export function SecGadientText({ children, className }: any) {
  return (
    <span
      className={cn(
        `bg-gradient-to-b from-yellow-500  to-white   text-transparent bg-clip-text`,
        className
      )}
    >
      {children}
    </span>
  );
}
