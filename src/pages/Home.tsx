import Contact from "../components/home/Contact";
import FAQS from "../components/home/Faqs";
import HeroSection from "../components/home/HeroSection";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Navbar from "../components/navbar/Navbar";
import { SparklesCore } from "../components/ui/Sparkles";
import { cn } from "../utils/cn";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="relative " >
      <Navbar />

      <div className="w-full h-full flex flex-col gap-10 relative overflow-x-hidden">
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
        <Testimonials />

        <FAQS />
        <Contact />
      </div>
    </div>
  );
}

export function GradientText({ children, className }: any) {
  return (
    <span
      className={cn(
        `bg-gradient-to-b from-blue-400 via-indigo-300 to-white  text-transparent bg-clip-text`,
        className
      )}
    >
      {children}
    </span>
  );
}
export function TerGradientText({ children, className }: any) {
  return (
    <span
      className={cn(
        `bg-gradient-to-r  from-violet-300 to-white   text-transparent bg-clip-text`,
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
        `bg-gradient-to-b from-gray-500  to-white   text-transparent bg-clip-text`,
        className
      )}
    >
      {children}
    </span>
  );
}
export function BottomGlow({ className }: any) {
  return (
    <div className={cn(`relative`, className)}>
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      {/* <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" /> */}
      {/* <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
    </div>
  );
}
