import Contact from "../components/home/Contact";
import FAQS from "../components/home/Faqs";
import HeroSection from "../components/home/HeroSection";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import { cn } from "../utils/cn";
import About from "../components/home/About";

type Props = {};

export default function Home({}: Props) {
  
  return (
    <div
      className="w-full h-full flex flex-col  relative "
    >
      <HeroSection />
      <div className=" h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="gap-6 flex flex-col relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 overflow-hidden ">
          <Services />
          <About/>
          <Contact />
          <FAQS />
          <Testimonials />
        </div>
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
        `bg-gradient-to-l  from-[#a185ff] to-white   text-transparent bg-clip-text`,
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
        `bg-gradient-to-b from-purple-400  to-white   text-transparent bg-clip-text`,
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
